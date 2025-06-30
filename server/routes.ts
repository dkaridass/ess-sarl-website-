import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = req.body;
      
      // Validate form data
      const validatedData = insertContactSchema.parse(contactData);
      
      // Create contact submission in database
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ 
        message: "Form submission successful", 
        data: submission 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // API route for newsletter subscriptions
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const newsletterData = req.body;
      
      // Validate newsletter data
      const validatedData = insertNewsletterSchema.parse(newsletterData);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterByEmail(validatedData.email);
      if (existingSubscription) {
        return res.status(200).json({ 
          message: "Email already subscribed",
          data: existingSubscription
        });
      }
      
      // Create subscription
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ 
        message: "Subscription successful", 
        data: subscription 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get contact submissions - admin endpoint
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Get newsletter subscriptions - admin endpoint
  app.get("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.status(200).json(subscriptions);
    } catch (error) {
      console.error("Error fetching newsletter subscriptions:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Chatbot API endpoint
  app.post("/api/chatbot", async (req: Request, res: Response) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }
      
      // Enhanced rule-based chatbot responses with detailed ESS SARL information
      const responses: {[key: string]: string} = {
        // Greetings
        "hello": "Hello! I'm the ESS SARL virtual assistant. How can I help you today with our environmental and safety consultancy services?",
        "hi": "Hi there! Welcome to ESS SARL. I can provide information about our expert consultancy services, training programs, or environmental solutions for industrial and mining operations in the DRC. What would you like to know?",
        
        // Services
        "services": "ESS SARL offers three main categories of services:\n\n1. Expert consultancy services for optimizing operations and ensuring regulatory compliance\n2. Comprehensive training and mentoring programs focused on safety, environmental performance, and operational efficiency\n3. Sustainable environmental management solutions, including ISO 14001 certified services\n\nWould you like more details about any specific service?",
        "consultancy": "Our expert consultancy services help industrial and mining operations optimize their processes while ensuring full regulatory compliance. We conduct thorough assessments, develop tailored improvement strategies, and provide ongoing support to implement solutions that enhance both operational efficiency and environmental performance.",
        "training": "ESS SARL delivers comprehensive training and mentoring programs focused on safety, environmental performance, and operational efficiency. Our training programs are customized to your specific industry needs and can be conducted on-site or at our training facilities. We've successfully trained over 500 professionals across the DRC.",
        "environmental": "Our sustainable environmental management solutions include ISO 14001 certified services. We help companies develop and implement effective environmental management systems, conduct environmental impact assessments, and ensure compliance with local and international environmental standards.",
        
        // About
        "about": "ESS SARL is a pioneering provider of environmental and safety solutions in the Democratic Republic of Congo. With decades of industry experience and a team of expert consultants, we have a vision to be the leading provider of integrated consultancy, training, and environmental solutions in the region. We've completed over 50 projects with a 100% compliance rate with international standards.",
        "experience": "ESS SARL brings decades of industry experience to every project. Our team of expert consultants has worked across various sectors including mining, manufacturing, oil and gas, and infrastructure development in the DRC. This extensive experience allows us to provide tailored solutions that address the unique challenges of operating in the region.",
        "vision": "Our vision is to be the leading provider of integrated consultancy, training, and environmental solutions in the DRC and beyond. We strive to set the industry standard for quality, safety, and innovation while contributing to sustainable development in the communities where we operate.",
        
        // Impact
        "impact": "ESS SARL has made a significant impact in the DRC's industrial and mining sectors:\n\n• Over 50 projects completed successfully\n• More than 500 professionals trained in safety and environmental management\n• 100% compliance rate with international standards\n• Helped numerous companies achieve ISO certifications\n• Reduced environmental incidents by an average of 40% for our clients",
        "projects": "We have successfully completed over 50 projects across the DRC, ranging from environmental impact assessments for new mining operations to comprehensive safety management systems for established industrial facilities. Each project is approached with the same commitment to excellence and tailored solutions.",
        
        // Core Values
        "values": "ESS SARL operates according to five core values:\n\n1. Quality in service delivery\n2. Safety as an absolute priority\n3. Innovation in technical solutions\n4. Responsibility towards environmental and social standards\n5. Collaboration with clients\n\nThese values guide every aspect of our work and relationships with clients.",
        "quality": "Quality in service delivery is a cornerstone of our approach. We apply rigorous standards to all our work, ensuring that our clients receive solutions that not only meet but exceed industry expectations. Our quality management system ensures consistency and excellence across all projects.",
        "safety": "At ESS SARL, we consider safety an absolute priority. Beyond regulatory compliance, we promote a culture of safety that emphasizes proactive risk management and continuous improvement. Our safety protocols are designed to protect workers, communities, and the environment.",
        "innovation": "We pride ourselves on innovation in technical solutions. The unique challenges of the DRC require creative approaches, and our team constantly researches and develops new methodologies to address emerging issues in environmental management and safety.",
        "responsibility": "Environmental and social responsibility is integral to our business model. We believe that industrial development should contribute positively to local communities and minimize environmental impacts. Our solutions always consider the broader social and environmental context.",
        "collaboration": "We believe in close collaboration with our clients. Your success is our success, which is why we develop long-term partnerships rather than transactional relationships. We work side by side with your team to ensure knowledge transfer and sustainable implementation of our recommendations.",
        
        // Testimonials
        "testimonials": "Our clients speak highly of our services:\n\n\"ESS SARL transformed our environmental management system, helping us achieve ISO 14001 certification in record time. Their expertise was invaluable.\" - Jean-Pierre Nkulu, Operations Director\n\n\"The training programs delivered by ESS SARL significantly improved our safety culture. Our incident rate has decreased by 60% since implementation.\" - Marie Claire, HSE Manager\n\n\"Their consultancy services provided practical, cost-effective solutions that improved both our compliance and operational efficiency.\" - Patrick, Mining Director",
        
        // Achievements
        "achievements": "ESS SARL has earned several notable achievements:\n\n• ISO 14001 certification for our own operations and helped numerous clients achieve the same\n• Industry recognition for excellence in safety and environmental management\n• Recognized as a leading consultancy firm by the DRC Ministry of Environment\n• Perfect safety record for our own operations\n• Multiple awards for our innovative training methodologies",
        "certification": "ESS SARL holds ISO 14001 certification, demonstrating our commitment to environmental management excellence. We also help our clients achieve various certifications including ISO 14001, ISO 45001, and industry-specific certifications relevant to their operations.",
        
        // FAQs
        "faq": "Here are answers to some frequently asked questions:\n\n• What industries do you serve? We specialize in mining, manufacturing, oil and gas, and infrastructure sectors in the DRC.\n\n• Do you offer emergency response services? Yes, we provide 24/7 emergency response consulting for environmental incidents.\n\n• Are your services compliant with DRC regulations? Absolutely, we stay current with all local regulations and international standards.\n\n• What safety certifications do you hold? Our team holds various certifications including NEBOSH, IOSH, and industry-specific qualifications.\n\nFor more questions, please contact us directly.",
        "industries": "ESS SARL serves a range of industries in the DRC, with particular expertise in:\n• Mining (both large-scale and artisanal)\n• Manufacturing\n• Oil and gas\n• Infrastructure development\n• Agriculture\n• Transportation and logistics\nOur tailored approach allows us to address the specific environmental and safety challenges of each sector.",
        "regulations": "Our services are fully compliant with DRC regulations. We maintain close relationships with regulatory authorities and constantly monitor legislative developments to ensure our advice is current and comprehensive. We also help clients navigate the complex regulatory landscape of the DRC's environmental and safety laws.",
        
        // Contact
        "contact": "You can reach ESS SARL through multiple channels:\n\n• Email: office@ess-sarl.com\n• Phone: +243 99 123 4567\n• Office: 123 Avenue des Enterprises, Kinshasa, DRC\n• Website contact form: www.ess-sarl.com/contact\n\nOur team typically responds within 24 hours on business days.",
        "office": "Our headquarters is located in Kinshasa, Democratic Republic of Congo, with regional offices in Lubumbashi and Goma. This network allows us to provide responsive service throughout the country, even in remote mining regions.",
        
        // Help
        "help": "I can provide information about ESS SARL's services, experience, values, achievements, and more. You can ask me about:\n\n• Our consultancy, training, and environmental services\n• Our experience and impact in the DRC\n• Our core values and approach\n• Client testimonials and case studies\n• How to contact us\n\nWhat would you like to know about?"
      };
      
      // Process the message to find the best response
      const lowercaseMessage = message.toLowerCase();
      let response = "I'm not sure how to answer that specific question. However, ESS SARL specializes in environmental and safety consultancy for industrial and mining operations in the DRC. We offer expert consultancy, training programs, and environmental management solutions. Would you like information about our services, company background, or how to contact us?";
      
      // Check if the message contains any of our keywords
      for (const [keyword, reply] of Object.entries(responses)) {
        if (lowercaseMessage.includes(keyword)) {
          response = reply;
          break;
        }
      }
      
      // Special cases for common questions
      if (lowercaseMessage.includes("what") && lowercaseMessage.includes("service")) {
        response = responses["services"];
      }
      
      if (lowercaseMessage.includes("who are you") || lowercaseMessage.includes("who is ess")) {
        response = responses["about"];
      }
      
      if (lowercaseMessage.includes("what") && lowercaseMessage.includes("value")) {
        response = responses["values"];
      }
      
      if (lowercaseMessage.includes("how many") && (lowercaseMessage.includes("project") || lowercaseMessage.includes("train"))) {
        response = responses["impact"];
      }
      
      if (lowercaseMessage.includes("where") && (lowercaseMessage.includes("office") || lowercaseMessage.includes("located"))) {
        response = responses["office"];
      }
      
      if ((lowercaseMessage.includes("what") && lowercaseMessage.includes("industr")) || 
          (lowercaseMessage.includes("which") && lowercaseMessage.includes("industr"))) {
        response = responses["industries"];
      }
      
      res.status(200).json({ message: response });
    } catch (error) {
      console.error("Chatbot error:", error);
      res.status(500).json({ 
        message: "Sorry, I encountered an error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  
  // Add a simple test route to verify server is working
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });
  
  return httpServer;
}
