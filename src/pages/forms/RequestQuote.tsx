
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { FileText, AlertCircle } from "lucide-react";

// Form schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  country: z.string().min(2, { message: "Please select your country." }),
  productInterest: z.string().min(2, { message: "Please select a product category." }),
  specificProducts: z.string().optional(),
  quantity: z.string().min(1, { message: "Please provide an estimated quantity." }),
  timeframe: z.string().min(2, { message: "Please select a timeframe." }),
  additionalInfo: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to our terms and privacy policy.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const RequestQuote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      country: "",
      productInterest: "",
      specificProducts: "",
      quantity: "",
      timeframe: "",
      additionalInfo: "",
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
        title: "Quote Request Submitted",
        description: "Thank you for your request. Our team will get back to you with a custom quote shortly.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    }, 1500);
  };

  return (
    <PageLayout title="Request a Quote">
      <PageHeader 
        title="Request a Quote" 
        subtitle="Tell us about your product needs, and we'll provide a customized quote for your business."
        backgroundImage="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form Info */}
            <div className="lg:col-span-1">
              <div className="bg-herb-50 p-8 rounded-lg sticky top-24">
                <div className="flex items-center mb-6">
                  <FileText className="h-7 w-7 text-herb-600 mr-3" />
                  <h2 className="text-2xl font-bold text-herb-800">Quote Request</h2>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete this form to request a customized quote for our products. Our team will review your requirements and get back to you with pricing and additional information.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-md border border-herb-100">
                    <h3 className="font-medium text-herb-700 mb-2">What happens next?</h3>
                    <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                      <li>Our team reviews your request (1-2 business days)</li>
                      <li>We may contact you for additional details</li>
                      <li>You receive a detailed quote by email</li>
                      <li>Follow-up consultation if needed</li>
                    </ol>
                  </div>
                  
                  <div className="bg-cream-50 p-4 rounded-md border border-cream-100">
                    <h3 className="font-medium text-herb-700 mb-2">Need samples first?</h3>
                    <p className="text-gray-600 mb-3">
                      If you'd like to evaluate our products before placing an order, you can request samples.
                    </p>
                    <Button variant="outline" className="w-full border-herb-600 text-herb-600" asChild>
                      <a href="/request-sample">Request Samples Instead</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-herb-800">Your Information</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-herb-700 pb-2 border-b border-gray-100">Contact Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
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
                              <FormLabel>Phone Number*</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 123 456 7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-herb-700 pb-2 border-b border-gray-100">Company Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title*</FormLabel>
                              <FormControl>
                                <Input placeholder="Product Manager" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country*</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="us">United States</SelectItem>
                                  <SelectItem value="ca">Canada</SelectItem>
                                  <SelectItem value="uk">United Kingdom</SelectItem>
                                  <SelectItem value="au">Australia</SelectItem>
                                  <SelectItem value="in">India</SelectItem>
                                  <SelectItem value="de">Germany</SelectItem>
                                  <SelectItem value="fr">France</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-herb-700 pb-2 border-b border-gray-100">Product Requirements</h3>
                      
                      <FormField
                        control={form.control}
                        name="productInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Category of Interest*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select product category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="standardized">Standardized Herbal Extracts</SelectItem>
                                <SelectItem value="organic">Organic Herbal Extracts</SelectItem>
                                <SelectItem value="signature">Signature Ingredients</SelectItem>
                                <SelectItem value="probiotics">Probiotics</SelectItem>
                                <SelectItem value="multiple">Multiple Categories</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="specificProducts"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specific Products</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please list the specific products or extracts you're interested in (e.g., Turmeric Extract, Ashwagandha, etc.)" 
                                className="min-h-[80px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>Optional, but helps us provide a more accurate quote.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Quantity*</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 100 kg, 500 units" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="timeframe"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Procurement Timeframe*</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeframe" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                                  <SelectItem value="quarter">This Quarter</SelectItem>
                                  <SelectItem value="sixmonths">Next 6 Months</SelectItem>
                                  <SelectItem value="year">This Year</SelectItem>
                                  <SelectItem value="exploratory">Just Exploring Options</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Requirements</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide any additional details about your requirements, specifications, or questions." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
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
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-herb-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-10 text-herb-800 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">How long does it take to receive a quote?</h3>
              <p className="text-gray-600">We typically provide quotes within 1-2 business days. For complex requests or custom formulations, it may take up to 3-5 business days.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">What information is included in the quote?</h3>
              <p className="text-gray-600">Our quotes include product pricing, minimum order quantities, estimated delivery times, payment terms, and product specifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">Can I request samples before ordering?</h3>
              <p className="text-gray-600">Yes, we provide samples for evaluation. You can request samples through our sample request form, and our team will arrange them for you.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">Do you offer volume discounts?</h3>
              <p className="text-gray-600">Yes, we offer tiered pricing based on order volume. The details will be included in your quote based on your specified quantities.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RequestQuote;
