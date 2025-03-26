
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  country: z.string().min(2, { message: "Country is required" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const DownloadCatalogue = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      country: "",
      acceptTerms: false,
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
        title: "Success!",
        description: "Your catalogue download is ready.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mockDownload = () => {
    // In a real application, this would initiate an actual file download
    toast({
      title: "Download initiated",
      description: "Your catalogue is being downloaded.",
    });
    
    // Mock download completed message
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Thank you for your interest in Star Hi Herbs products.",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <PageLayout title="Download Catalogue">
        <div className="container-wide py-16 max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-herb-800">Your Catalogue is Ready!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in Star Hi Herbs products. Your catalogue is now available for download.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex justify-center mb-3">
                  <FileText className="h-12 w-12 text-herb-600" />
                </div>
                <h3 className="font-semibold text-herb-700 mb-1">Star Hi Herbs Product Catalogue 2023</h3>
                <p className="text-sm text-gray-500 mb-4">Complete overview of our standardized extracts, organic offerings, and probiotics.</p>
                <Button className="w-full" onClick={mockDownload}>
                  <Download className="mr-2 h-4 w-4" /> Download Catalogue (PDF, 8.5MB)
                </Button>
              </div>
              
              <div className="text-sm text-gray-500 mb-6">
                <p>We've also sent the download link to your email address.</p>
                <p>Our team will be in touch with you shortly to discuss how we can support your business needs.</p>
              </div>
              
              <Button variant="outline" className="w-full" asChild>
                <a href="/">Return to Homepage</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Download Catalogue">
      <PageHeader
        title="Download Our Catalogue"
        subtitle="Access our complete product range with detailed specifications"
        backgroundImage="https://images.unsplash.com/photo-1607703829739-c05b7beddf60?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-herb-800">What's Inside Our Catalogue</h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive product catalogue provides you with detailed information about our entire range of botanical extracts and probiotics. Inside you'll find:
            </p>
            
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Detailed product specifications and standardization levels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Available forms and packaging options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Recommended applications and use cases</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Quality assurance information and certifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-herb-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Storage recommendations and shelf life details</span>
              </li>
            </ul>
            
            <div className="bg-herb-50 p-4 rounded-lg mb-6">
              <div className="flex">
                <FileText className="h-6 w-6 text-herb-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-herb-700 mb-1">Format Details</h4>
                  <p className="text-sm text-gray-600">
                    PDF format, 45 pages, 8.5MB. Last updated June 2023.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-herb-800">Request Download Access</h3>
                <p className="text-gray-600 mb-6">
                  Please fill out the form below to download our product catalogue. This helps us better understand your interests and provide relevant follow-up information.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    
                    <FormField
                      control={form.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              I agree to receive product updates and information from Star Hi Herbs. You can unsubscribe at any time.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Get Catalogue"}
                    </Button>
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

export default DownloadCatalogue;
