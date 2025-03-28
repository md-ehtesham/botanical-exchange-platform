
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface NewsletterSubscriptionProps {
  className?: string;
  variant?: "default" | "sidebar";
}

const NewsletterSubscription = ({ className = "", variant = "default" }: NewsletterSubscriptionProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (variant === "sidebar") {
    return (
      <div className={`bg-herb-50 p-5 rounded-lg ${className}`}>
        <h3 className="text-lg font-semibold mb-3 text-herb-700">Subscribe to our newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">Stay updated with our latest insights and industry news.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starhi-green"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-herb-50 py-12 px-6 md:px-12 rounded-xl ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 text-starhi-green" />
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-herb-800">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Stay updated with our latest product releases, industry insights, and exclusive offers by subscribing to our newsletter.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starhi-green"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="text-white" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
