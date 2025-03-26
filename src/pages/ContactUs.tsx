
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Building, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to our terms and privacy policy.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We'll get back to you shortly.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    }, 1500);
  };

  return (
    <PageLayout title="Contact Us">
      <PageHeader 
        title="Contact Us" 
        subtitle="Have questions about our products or services? We're here to help. Reach out to our team."
        backgroundImage="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-herb-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-herb-800">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-herb-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-herb-700 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 123 456 7890</p>
                      <p className="text-gray-600">+91 987 654 3210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-herb-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-herb-700 mb-1">Email</h3>
                      <p className="text-gray-600">info@starhiherbs.com</p>
                      <p className="text-gray-600">sales@starhiherbs.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-herb-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-herb-700 mb-1">Head Office</h3>
                      <p className="text-gray-600">123 Botanical Way, Herbal District</p>
                      <p className="text-gray-600">HD 12345, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Building className="h-5 w-5 text-herb-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-herb-700 mb-1">Manufacturing Facility</h3>
                      <p className="text-gray-600">456 Processing Avenue, Industrial Zone</p>
                      <p className="text-gray-600">IZ 56789, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-herb-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-herb-700 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-herb-800">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address*</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
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
                              <Input placeholder="+1 123 456 7890" {...field} />
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
                            <FormLabel>Company Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject*</FormLabel>
                          <FormControl>
                            <Input placeholder="Product Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your inquiry..." 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the <a href="/terms" className="text-herb-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-herb-600 hover:underline">Privacy Policy</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center mt-6">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                      <p className="text-sm text-gray-500">Fields marked with an asterisk (*) are required.</p>
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10 bg-herb-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-6 text-herb-800 text-center">Our Locations</h2>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {/* This would be replaced with an actual Google Maps or other map integration */}
            <div className="bg-gray-200 h-[400px] rounded flex items-center justify-center">
              <p className="text-gray-600">Map integration would be implemented here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-10 text-herb-800 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-herb-50 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-3 text-herb-700">What information do I need to provide for a quote?</h3>
              <p className="text-gray-600">When requesting a quote, please include details about the specific product, quantity needed, intended application, and your timeline.</p>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-3 text-herb-700">Do you offer samples before bulk orders?</h3>
              <p className="text-gray-600">Yes, we provide samples for quality evaluation. You can request samples through our "Order a Sample" form with your specific requirements.</p>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-3 text-herb-700">What is your typical response time?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24-48 business hours. Technical questions may require additional time for our specialists to provide accurate information.</p>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-3 text-herb-700">Do you have distributors in my country?</h3>
              <p className="text-gray-600">We have distribution partners in many countries. Contact us with your location, and we'll connect you with the appropriate representative in your region.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
