
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // In a real app, you would fetch the blog post data based on the postId
  // For now, we're using mock data
  const post = {
    id: postId,
    title: "The Growing Demand for Standardized Herbal Extracts in Global Markets",
    content: `
      <p>The global market for herbal extracts has experienced significant growth in recent years, driven by increasing consumer awareness of health and wellness, a preference for natural products, and growing scientific validation of herbal efficacy. This trend shows no signs of slowing, with standardized herbal extracts emerging as a key growth segment.</p>
      
      <h2>Market Trends and Drivers</h2>
      
      <p>Several factors are contributing to the heightened demand for standardized herbal extracts:</p>
      
      <ul>
        <li><strong>Pharmaceutical Interest:</strong> Major pharmaceutical companies are increasingly investing in plant-based drug development, recognizing the potential of traditional medicinal plants.</li>
        <li><strong>Regulatory Advancement:</strong> Improved regulatory frameworks worldwide are providing clearer guidelines for herbal products, increasing confidence among manufacturers and consumers.</li>
        <li><strong>Scientific Validation:</strong> Growing research substantiating the efficacy and safety of herbal compounds is driving acceptance in mainstream healthcare.</li>
        <li><strong>Consumer Preference:</strong> A shift toward preventive healthcare and natural solutions is increasing demand for herbal supplements with proven benefits.</li>
      </ul>
      
      <h2>The Importance of Standardization</h2>
      
      <p>Standardization has become crucial in the herbal extract industry for several reasons:</p>
      
      <ol>
        <li><strong>Consistent Efficacy:</strong> Standardization ensures a consistent level of active compounds, guaranteeing predictable therapeutic effects.</li>
        <li><strong>Quality Assurance:</strong> Standardized extracts undergo rigorous testing for purity, potency, and safety.</li>
        <li><strong>Research Foundation:</strong> Standardized extracts provide a reliable basis for clinical research, accelerating scientific validation.</li>
        <li><strong>Regulatory Compliance:</strong> Meeting standardization requirements simplifies regulatory approval processes across different markets.</li>
      </ol>
      
      <h2>Regional Growth Patterns</h2>
      
      <p>While demand is growing globally, certain regions are showing particularly strong trends:</p>
      
      <p><strong>North America:</strong> The U.S. and Canada are witnessing robust growth in the standardized botanical extract market, primarily in the nutraceutical and functional food segments.</p>
      
      <p><strong>Europe:</strong> European markets, especially Germany and France, continue their long tradition of herbal medicine with increasing demands for documented standardized extracts.</p>
      
      <p><strong>Asia-Pacific:</strong> This region represents both the largest producer and consumer of herbal extracts, with China, India, and Japan leading market expansion through innovation and traditional medicine integration.</p>
      
      <h2>Future Outlook</h2>
      
      <p>The market for standardized herbal extracts is projected to continue its upward trajectory, with expectations of compound annual growth rates exceeding 6% through 2028. Key growth opportunities include:</p>
      
      <ul>
        <li>Development of novel extraction technologies to improve bioavailability</li>
        <li>Integration of herbal extracts in functional foods and beverages</li>
        <li>Expansion of clinical research programs to validate traditional uses</li>
        <li>Vertical integration to ensure sustainable and traceable supply chains</li>
      </ul>
      
      <p>At Star Hi Herbs, we're committed to being at the forefront of these developments, investing in research, quality control, and sustainable sourcing to meet the growing global demand for premium standardized herbal extracts.</p>
    `,
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "Industry Insights",
    author: {
      name: "Dr. Rajesh Patel",
      title: "Research Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    image: "https://images.unsplash.com/photo-1585435557885-22b971e71560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["market trends", "standardization", "herbal extracts", "pharmaceutical", "regulatory"]
  };

  // Related posts (mock data)
  const relatedPosts = [
    {
      id: 2,
      title: "Innovations in Extraction Technology: Improving Bioavailability",
      date: "May 12, 2023",
      category: "Research & Development",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Regulatory Developments for Botanical Ingredients in Asia-Pacific Markets",
      date: "April 28, 2023",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "The Science Behind Standardization: Ensuring Consistent Potency",
      date: "March 25, 2023",
      category: "Research & Development",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <PageLayout title={post.title}>
      <div className="container-wide py-8 md:py-16">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <span className="text-sm font-medium py-1 px-2 rounded bg-herb-100 text-herb-700 inline-block mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-herb-800">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={post.author.image} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold text-herb-800">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.author.title}</div>
              </div>
            </div>
            
            <div 
              className="prose prose-herb max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-between p-4 border-t border-b">
              <div className="font-medium text-gray-700">Share this article</div>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto w-auto">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto w-auto">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto w-auto">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto w-auto">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full p-2 h-auto w-auto">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-herb-800">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map(related => (
                  <Card key={related.id} className="overflow-hidden">
                    <Link to={`/blog/${related.id}`} className="flex">
                      <div className="w-1/3">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="w-2/3 p-3">
                        <span className="text-xs font-medium text-herb-700">
                          {related.category}
                        </span>
                        <h4 className="text-sm font-medium line-clamp-2">{related.title}</h4>
                        <div className="text-xs text-gray-500 mt-1">{related.date}</div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-herb-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-herb-700">Subscribe to our newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">Stay updated with our latest insights and industry news.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herb-500"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPost;
