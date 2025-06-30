import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/chat/Chatbot";
import { Helmet } from "react-helmet";
import { lazy, Suspense, useEffect } from "react";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/not-found"));

function ScrollToTop() {
  // When the route changes, scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </QueryClientProvider>
  );
}

export default App;
