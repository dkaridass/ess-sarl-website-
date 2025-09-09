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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("form");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  
  // Define the form schema with validation
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(9, "Please enter a valid phone number"),
    service: z.string().min(1, "Please select a service"),
    urgency: z.string().min(1, "Please select urgency level"),
    budget: z.string().optional(),
    timeline: z.string().optional(),
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
      urgency: "",
      budget: "",
      timeline: "",
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
            <div className="w-20 h-1 bg-gradient-primary mb-6"></div>
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
            <a href="/" className="hover:text-[#2C5F7C] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Contact</span>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Methods Tabs */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab("form")}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  activeTab === "form"
                    ? "bg-[#30B4F2] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <i className="fas fa-envelope mr-2"></i>
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("call")}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  activeTab === "call"
                    ? "bg-[#30B4F2] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <i className="fas fa-phone mr-2"></i>
                Schedule Call
              </button>
              <button
                onClick={() => setActiveTab("visit")}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  activeTab === "visit"
                    ? "bg-[#30B4F2] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <i className="fas fa-map-marker-alt mr-2"></i>
                Visit Office
              </button>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <div className="sticky top-4">
                {/* Contact Info Cards */}
                <div className="space-y-6 mb-8">
                  <Card className="border-l-4 border-l-[#2C5F7C]">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1B4D3E]/10 to-[#2C5F7C]/10 rounded-full flex items-center justify-center text-[#2C5F7C] flex-shrink-0 mr-4">
                          <i className="fas fa-envelope text-lg"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                          <p className="text-gray-600 mb-2">office@ess-sarl.com</p>
                          <Badge variant="secondary" className="text-xs">24hr response</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mr-4">
                          <i className="fas fa-phone-alt text-lg"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                          <p className="text-gray-600 mb-2">+243 83 870 43 93</p>
                          <Badge variant="secondary" className="text-xs">Mon-Fri 8AM-5PM</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0 mr-4">
                          <i className="fas fa-calendar-alt text-lg"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Schedule Meeting</h3>
                          <p className="text-gray-600 mb-2">Book a consultation</p>
                          <Badge variant="secondary" className="text-xs">Free consultation</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Emergency Response */}
                <Card className="bg-red-50 border-red-200 mb-8">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-2"></i>
                      Emergency Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 mb-4">
                      For environmental or safety emergencies requiring immediate assistance:
                    </p>
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg border border-red-300">
                      <div className="font-bold text-lg">24/7 Emergency Hotline</div>
                      <div className="text-xl font-mono">+243 83 870 43 93</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Stay updated with our latest news, events, and insights.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#B87333] transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#B87333] transition-colors">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#B87333] transition-colors">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#B87333] transition-colors">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              {/* Form Tab */}
              {activeTab === "form" && (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name *</FormLabel>
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
                                <FormLabel>Company Name *</FormLabel>
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
                                <FormLabel>Email Address *</FormLabel>
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
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+243 ..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service of Interest *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="environmental-assessment">Environmental Impact Assessment</SelectItem>
                                    <SelectItem value="safety-training">Safety Training Programs</SelectItem>
                                    <SelectItem value="compliance-audit">Compliance Audit</SelectItem>
                                    <SelectItem value="emergency-response">Emergency Response Planning</SelectItem>
                                    <SelectItem value="consulting">General Consulting</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="urgency"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Urgency *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select urgency" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                                    <SelectItem value="high">High (Within 1 month)</SelectItem>
                                    <SelectItem value="medium">Medium (Within 3 months)</SelectItem>
                                    <SelectItem value="low">Low (Planning phase)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Estimated Budget</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under-10k">Under $10,000</SelectItem>
                                    <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                                    <SelectItem value="over-500k">Over $500,000</SelectItem>
                                    <SelectItem value="discuss">Prefer to discuss</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Timeline</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select timeline" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="immediate">Immediate start</SelectItem>
                                    <SelectItem value="1-month">Within 1 month</SelectItem>
                                    <SelectItem value="3-months">Within 3 months</SelectItem>
                                    <SelectItem value="6-months">Within 6 months</SelectItem>
                                    <SelectItem value="flexible">Flexible</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Details *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe your project requirements, challenges, and any specific needs..." 
                                  className="min-h-[150px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                            <div className="text-sm text-blue-700">
                              <p className="font-semibold mb-1">What happens next?</p>
                              <ul className="list-disc list-inside space-y-1">
                                <li>We'll review your requirements within 24 hours</li>
                                <li>Our team will prepare a customized proposal</li>
                                <li>We'll schedule a consultation call to discuss details</li>
                                <li>You'll receive a detailed project plan and timeline</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-[#30B4F2] to-[#228CBF] hover:from-[#228CBF] hover:to-[#1a7aa3] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fas fa-spinner fa-spin mr-2"></i>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane mr-2"></i>
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}

              {/* Call Tab */}
              {activeTab === "call" && (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Schedule a Consultation Call</CardTitle>
                    <p className="text-gray-600">Book a free 30-minute consultation with our experts.</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Available Time Slots</h3>
                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-4 hover:border-[#2C5F7C] cursor-pointer transition-colors">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">Monday, Dec 16</div>
                                <div className="text-sm text-gray-600">9:00 AM - 9:30 AM</div>
                              </div>
                              <Badge variant="secondary">Available</Badge>
                            </div>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-4 hover:border-[#2C5F7C] cursor-pointer transition-colors">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">Tuesday, Dec 17</div>
                                <div className="text-sm text-gray-600">2:00 PM - 2:30 PM</div>
                              </div>
                              <Badge variant="secondary">Available</Badge>
                            </div>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-4 hover:border-[#2C5F7C] cursor-pointer transition-colors">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">Wednesday, Dec 18</div>
                                <div className="text-sm text-gray-600">10:30 AM - 11:00 AM</div>
                              </div>
                              <Badge variant="secondary">Available</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Call Details</h3>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-video text-[#2C5F7C] mr-3"></i>
                            <span>Video call via Zoom/Teams</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-clock text-[#2C5F7C] mr-3"></i>
                            <span>30 minutes duration</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-gift text-[#2C5F7C] mr-3"></i>
                            <span>Completely free</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-users text-[#2C5F7C] mr-3"></i>
                            <span>Expert consultant included</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 btn-primary">
                          <i className="fas fa-calendar-plus mr-2"></i>
                          Book Consultation
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Visit Tab */}
              {activeTab === "visit" && (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                    <p className="text-gray-600">Come meet our team in person at our headquarters in Lubumbashi.</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Office Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <i className="fas fa-map-marker-alt text-[#2C5F7C] mt-1 mr-3"></i>
                            <div>
                              <div className="font-semibold">Address</div>
                              <div className="text-gray-600">02 Avenue Papy LUBOTA, quartier Golf Tshamalale, Lubumbashi, Haut-Katanga, DRC</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-clock text-[#2C5F7C] mt-1 mr-3"></i>
                            <div>
                              <div className="font-semibold">Business Hours</div>
                              <div className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</div>
                              <div className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-parking text-[#2C5F7C] mt-1 mr-3"></i>
                            <div>
                              <div className="font-semibold">Parking</div>
                              <div className="text-gray-600">Free parking available on-site</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Schedule Your Visit</h3>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-calendar-check text-[#2C5F7C] mr-3"></i>
                            <span>Appointment required</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-user-tie text-[#2C5F7C] mr-3"></i>
                            <span>Meet with senior consultants</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-coffee text-[#2C5F7C] mr-3"></i>
                            <span>Refreshments provided</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 btn-primary">
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          Schedule Visit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Office Locations - SRK Style */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visit us at one of our office locations throughout the Democratic Republic of Congo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-6 shadow-md relative">
                  {office.isHeadquarters && (
                    <div className="absolute top-4 right-4 bg-gradient-primary text-white text-xs px-2 py-1">
                      Headquarters
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <div className="w-12 h-1 bg-gradient-primary mb-4"></div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#2C5F7C] mt-1 w-5"></i>
                      <span className="ml-3 text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-phone-alt text-[#2C5F7C] mt-1 w-5"></i>
                      <span className="ml-3 text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-envelope text-[#2C5F7C] mt-1 w-5"></i>
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
              <div className="w-16 h-1 bg-gradient-primary mx-auto mb-4"></div>
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
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss how ESS SARL can help your business achieve environmental compliance and operational excellence.
          </p>
          <a 
            href="tel:+243838704393" 
            className="inline-block bg-white text-[#2C5F7C] hover:bg-gray-100 px-8 py-3 font-medium transition-colors"
          >
            <i className="fas fa-phone-alt mr-2"></i> Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
}