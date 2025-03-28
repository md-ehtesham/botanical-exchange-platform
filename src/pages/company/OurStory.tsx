
import PageLayout from "@/components/layout/PageLayout";
import { Calendar } from "lucide-react";

const OurStory = () => {
  return (
    <PageLayout title="Our Story">
      <div className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-lg text-muted-foreground">
              The journey of Star Hi Herbs from a small operation to a global leader in herbal extracts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Beginnings</h2>
              <p className="mb-6 text-muted-foreground">
                Star Hi Herbs was founded with a simple yet powerful vision: to bridge traditional herbal wisdom with modern scientific validation. Our founders, drawing from generations of knowledge about India's rich botanical heritage, established the company in 2005 as a small-scale operation focused on a handful of high-quality herbal extracts.
              </p>
              <p className="text-muted-foreground">
                The early years were characterized by meticulous research, building relationships with local farmers, and establishing rigorous quality control processes that would become the foundation of our reputation.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg" alt="Star Hi Herbs early days" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Journey</h2>
            <div className="space-y-12">
              <TimelineItem 
                year="2005" 
                title="Foundation"
                description="Star Hi Herbs was established with a focus on standardized herbal extracts for the local market."
              />
              
              <TimelineItem 
                year="2010" 
                title="First International Expansion"
                description="Began exporting to markets in Southeast Asia and the Middle East, introducing our high-quality extracts to a global audience."
              />
              
              <TimelineItem 
                year="2014" 
                title="Research & Development Center"
                description="Opened our dedicated R&D facility in Bengaluru to accelerate innovation and product development."
              />
              
              <TimelineItem 
                year="2017" 
                title="Hassan Production Facility"
                description="Inaugurated our state-of-the-art production facility in Hassan, significantly increasing our manufacturing capacity."
              />
              
              <TimelineItem 
                year="2019" 
                title="Organic Certification"
                description="Achieved organic certification for our key product lines, reflecting our commitment to sustainable practices."
              />
              
              <TimelineItem 
                year="2022" 
                title="Global Expansion"
                description="Expanded our presence to over 30 countries across 5 continents, becoming a trusted global supplier."
              />
              
              <TimelineItem 
                year="Present" 
                title="Continued Growth"
                description="Today, Star Hi Herbs continues to expand its product portfolio and global footprint while maintaining its core values of quality, sustainability, and innovation."
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg" alt="Star Hi Herbs vision" className="w-full h-auto" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">Our Vision For The Future</h2>
              <p className="mb-6 text-muted-foreground">
                As we look to the future, Star Hi Herbs remains committed to pushing the boundaries of herbal extract research and production. We aim to continue expanding our product portfolio while maintaining our unwavering commitment to quality and sustainability.
              </p>
              <p className="text-muted-foreground">
                We're investing in advanced technologies, strengthening our partnerships with farming communities, and exploring new applications for our extracts in emerging markets like nutraceuticals, cosmeceuticals, and functional foods.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Us On Our Journey</h2>
            <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
              Whether you're a customer, supplier, potential employee, or industry partner, we invite you to be part of the Star Hi Herbs story as we continue to grow and evolve.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem = ({ year, title, description }: TimelineItemProps) => {
  return (
    <div className="flex">
      <div className="flex-none w-20 md:w-24 text-center">
        <div className="flex items-center justify-center bg-starhi-green text-white rounded-full w-12 h-12 md:w-14 md:h-14 mx-auto">
          <Calendar className="h-5 w-5" />
        </div>
        <div className="mt-2 font-bold text-starhi-green">{year}</div>
      </div>
      <div className="relative pl-6 -mt-2">
        <div className="absolute top-7 left-0 h-full w-px bg-gray-200" />
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
