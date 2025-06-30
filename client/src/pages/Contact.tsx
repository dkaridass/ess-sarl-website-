import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define the form schema with validation
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(9, "Please enter a valid phone number"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters")
  });

  // Create the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest(
        "POST", 
        "/api/contact", 
        data
      );

      toast({
        title: "Thank You!",
        description: "Your message has been sent successfully. We'll get back to you as soon as possible.",
        variant: "default"
      });

      // Reset the form
      form.reset();
    } catch (error: any) {
      console.error("Error sending message:", error);
      
      // Handle different error types
      if (error.message && error.message.includes("400")) {
        toast({
          title: "Validation Error",
          description: "Please check the form for errors and try again.",
          variant: "destructive"
        });
      } else if (error.message && error.message.includes("429")) {
        toast({
          title: "Too Many Requests",
          description: "You've submitted too many messages. Please try again later.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later or contact us directly at office@ess-sarl.com.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Office locations data
  const offices = [
    {
      city: "Lubumbashi",
      address: "02 Avenue Papy LUBOTA, quartier Golf Tshamalale, Lubumbashi, Haut-Katanga, DRC",
      phone: "+243 83 870 43 93",
      email: "office@ess-sarl.com",
      isHeadquarters: true
    }
  ];

  return (
    <div className="bg-gray-50">
      <SEO 
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
      />
      {/* Hero Section with Page Title - SRK Style */}
      <section className="bg-gray-900 relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Contact ESS SARL" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#30B4F2] mb-6"></div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-xl">
              Get in touch with our team to discuss how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb - SRK Style */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-[#30B4F2]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Information Grid - SRK Style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <div className="sticky top-4">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="w-16 h-1 bg-[#30B4F2] mb-6"></div>
                  <p className="text-gray-600 mb-8">
                    Whether you have a question about our services, need a consultation, or want to request a quote, our team is ready to help.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#30B4F2]/10 flex items-center justify-center text-[#30B4F2] flex-shrink-0 mt-1">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600">office@ess-sarl.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#30B4F2]/10 flex items-center justify-center text-[#30B4F2] flex-shrink-0 mt-1">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600">+243 83 870 43 93</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#30B4F2]/10 flex items-center justify-center text-[#30B4F2] flex-shrink-0 mt-1">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4">Emergency Response</h3>
                  <p className="text-gray-600 mb-4">
                    For environmental or safety emergencies requiring immediate assistance:
                  </p>
                  <div className="bg-red-50 text-red-700 p-4 border-l-4 border-red-500">
                    <div className="font-bold">24/7 Emergency Hotline</div>
                    <div>+243 83 870 43 93</div>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-white p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <p className="text-gray-300 mb-6">
                    Stay updated with our latest news, events, and insights.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#30B4F2] transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#30B4F2] transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#30B4F2] transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#30B4F2] transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="w-16 h-1 bg-[#30B4F2] mb-8"></div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+243 ..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service of Interest</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="environmental-consultancy">Environmental Consultancy</SelectItem>
                              <SelectItem value="safety-management">Safety Management</SelectItem>
                              <SelectItem value="training-programs">Training Programs</SelectItem>
                              <SelectItem value="regulatory-compliance">Regulatory Compliance</SelectItem>
                              <SelectItem value="emergency-response">Emergency Response</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your requirements or questions..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    

                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-[#30B4F2] hover:bg-[#228CBF]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          
          {/* Office Locations - SRK Style */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visit us at one of our office locations throughout the Democratic Republic of Congo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-6 shadow-md relative">
                  {office.isHeadquarters && (
                    <div className="absolute top-4 right-4 bg-[#30B4F2] text-white text-xs px-2 py-1">
                      Headquarters
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <div className="w-12 h-1 bg-[#30B4F2] mb-4"></div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#30B4F2] mt-1 w-5"></i>
                      <span className="ml-3 text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-phone-alt text-[#30B4F2] mt-1 w-5"></i>
                      <span className="ml-3 text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-envelope text-[#30B4F2] mt-1 w-5"></i>
                      <span className="ml-3 text-gray-600">{office.email}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 h-48 bg-gray-200 relative">
                    {/* Map placeholder - would be replaced with actual map in production */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <i className="fas fa-map-marked-alt text-4xl text-gray-400 mb-2"></i>
                        <p className="text-gray-500">Interactive map will be displayed here</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section - SRK Style */}
          <div className="bg-white p-8 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about contacting us and our services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How quickly will I receive a response to my inquiry?",
                    answer: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please call our office directly."
                  },
                  {
                    question: "Can I request an on-site consultation?",
                    answer: "Yes, we offer on-site consultations throughout the DRC. Please mention this in your message, and our team will arrange a visit to your location."
                  },
                  {
                    question: "Do you provide services outside the DRC?",
                    answer: "While we primarily serve clients in the DRC, we can provide consultancy services to neighboring countries on a case-by-case basis. Please contact us with your specific requirements."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - SRK Style */}
      <section className="bg-[#30B4F2] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss how ESS SARL can help your business achieve environmental compliance and operational excellence.
          </p>
          <a 
            href="tel:+243838704393" 
            className="inline-block bg-white text-[#30B4F2] hover:bg-gray-100 px-8 py-3 font-medium transition-colors"
          >
            <i className="fas fa-phone-alt mr-2"></i> Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
}