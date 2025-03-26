
import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const BlogListing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    "All",
    "Industry Insights",
    "Research & Development",
    "Product Spotlight",
    "Company News",
    "Sustainability"
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "The Growing Demand for Standardized Herbal Extracts in Global Markets",
      excerpt: "An analysis of current trends showing increased demand for documented standardized herbal extracts in pharmaceutical and nutraceutical industries.",
      date: "June 15, 2023",
      readTime: "5 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1585435557885-22b971e71560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Sustainable Sourcing: Our Commitment to Ethical Harvesting Practices",
      excerpt: "Learn about Star Hi Herbs' initiatives to ensure sustainable and ethical sourcing of botanical ingredients across our supply chain.",
      date: "May 28, 2023",
      readTime: "4 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Innovations in Probiotic Stability and Shelf Life",
      excerpt: "Our R&D team shares recent breakthroughs in enhancing probiotic stability and extending shelf life without compromising efficacy.",
      date: "May 12, 2023",
      readTime: "6 min read",
      category: "Research & Development",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"
    },
    {
      id: 4,
      title: "Star Hi Herbs Receives ISO 22000:2018 Certification",
      excerpt: "We're proud to announce our recent ISO 22000:2018 certification, further validating our commitment to food safety management systems.",
      date: "April 29, 2023",
      readTime: "3 min read",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1622227922682-56c92e523e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Spotlight: Turmeric Extract and Its Bioavailability Enhancements",
      excerpt: "A detailed look at our premium Turmeric Extract and the innovative techniques we use to enhance its bioavailability.",
      date: "April 10, 2023",
      readTime: "7 min read",
      category: "Product Spotlight",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "The Science Behind Standardization: Ensuring Consistent Potency",
      excerpt: "Understanding the advanced analytical methods that ensure our standardized extracts maintain consistent active compound levels.",
      date: "March 25, 2023",
      readTime: "5 min read",
      category: "Research & Development",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const filteredPosts = selectedCategory && selectedCategory !== "All" 
    ? blogPosts.filter(post => post.category === selectedCategory) 
    : blogPosts;

  return (
    <PageLayout title="Blog">
      <PageHeader
        title="Our Blog"
        subtitle="Insights and updates from the world of herbal extracts and probiotics"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
      />

      <div className="container-wide py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-herb-800">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="w-full md:w-3/4">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-xs font-medium py-1 px-2 rounded bg-herb-100 text-herb-700 inline-block mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-herb-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <Button variant="ghost" className="text-herb-600 hover:text-herb-700 hover:bg-herb-50 p-0 justify-start" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogListing;
