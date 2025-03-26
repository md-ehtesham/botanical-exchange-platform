
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  position: z.string().min(2, { message: "Job position is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  productInterest: z.string().min(2, { message: "Please specify which products you're interested in" }),
  intendedUse: z.string().min(10, { message: "Please provide details about your intended use" }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const OrderSample = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      position: "",
      country: "",
      productInterest: "",
      intendedUse: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would make an API request here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form data:", data);
      setIsSubmitted(true);
      toast({
        title: "Sample request submitted",
        description: "We've received your request and will contact you soon.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageLayout title="Sample Request Submitted">
        <div className="container-wide py-16 max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-herb-800">Sample Request Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in Star Hi Herbs products. We've received your sample request and our team will review it promptly. You can expect to hear from us within 2 business days.
              </p>
              <div className="space-y-4">
                <Button className="w-full" onClick={() => setIsSubmitted(false)}>Request Another Sample</Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Request a Sample">
      <PageHeader
        title="Request a Sample"
        subtitle="Experience the quality of our extracts firsthand"
        backgroundImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container-wide py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-herb-800">Why Request a Sample?</h3>
              <p className="text-gray-600 mb-6">
                We're confident in the quality of our herbal extracts and probiotics. Requesting a sample allows you to:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verify our product quality firsthand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Test compatibility with your formulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Evaluate our standardization consistency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Experience our commitment to excellence</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-herb-50 rounded-lg">
                <h4 className="font-semibold text-herb-700 mb-2">Note:</h4>
                <p className="text-sm text-gray-600">
                  Sample requests are reviewed and approved for verified business customers only. Please provide accurate business information to expedite your request.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6 text-herb-800">Sample Request Form</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
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
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Ltd." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Email*</FormLabel>
                            <FormControl>
                              <Input placeholder="you@company.com" {...field} />
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
                              <Input placeholder="+1 (555) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Position*</FormLabel>
                            <FormControl>
                              <Input placeholder="R&D Manager" {...field} />
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
                            <FormControl>
                              <Input placeholder="United States" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="productInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Products of Interest*</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Turmeric Extract, Ashwagandha Extract, etc." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="intendedUse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Intended Use*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please briefly describe how you plan to use our products..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific requirements or questions..."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OrderSample;
