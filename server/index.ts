import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Setup vite in development with more robust error handling
  if (process.env.NODE_ENV !== "production") {
    console.log('Setting up Vite development server...');
    try {
      await setupVite(app, server);
      console.log('Vite setup completed successfully');
    } catch (error) {
      console.error('Vite setup failed:', (error as Error).message);
      console.log('Application will continue without hot reloading');
      
      // Simple fallback route for development
      app.get('*', (req, res) => {
        res.send(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>ESS SARL</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
              .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              h1 { color: #2c5f2d; margin-bottom: 10px; }
              .subtitle { color: #666; margin-bottom: 30px; }
              .status { background: #e8f5e8; padding: 15px; border-radius: 5px; border-left: 4px solid #2c5f2d; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>ESS SARL</h1>
              <p class="subtitle">Environmental & Safety Solutions</p>
              <div class="status">
                <strong>Server Status:</strong> Running in development mode<br>
                <strong>API Endpoints:</strong> Available at /api/*<br>
                <strong>Time:</strong> ${new Date().toLocaleString()}
              </div>
            </div>
          </body>
          </html>
        `);
      });
    }
  } else {
    console.log('Setting up static serving...');
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  const host = "0.0.0.0";
  
  // Start the server and ensure it binds properly
  server.listen(port, host, () => {
    log(`serving on port ${port}`);
    console.log(`✓ Server listening on ${host}:${port} and accepting connections`);
    console.log(`✓ Application ready at http://localhost:${port}`);
    
    // Test the server is actually responding
    setTimeout(() => {
      import('http').then(http => {
        const req = http.request({
          hostname: 'localhost',
          port: port,
          path: '/',
          method: 'GET'
        }, (res) => {
          console.log(`✓ Server health check passed - status: ${res.statusCode}`);
        });
        
        req.on('error', (err) => {
          console.log(`⚠ Server health check failed: ${err.message}`);
        });
        
        req.end();
      });
    }, 1000);
  }).on('error', (err) => {
    console.error('✗ Server failed to start:', err);
    process.exit(1);
  });
  
  // Handle process termination gracefully
  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
})();
