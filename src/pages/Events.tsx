
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

type EventStatus = "upcoming" | "past";

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  website?: string;
  status: EventStatus;
}

const Events = () => {
  const [activeTab, setActiveTab] = useState<EventStatus>("upcoming");
  
  const events: Event[] = [
    {
      id: 1,
      title: "SupplySide West 2023",
      description: "Join us at SupplySide West, where we'll be showcasing our latest innovations in standardized herbal extracts and probiotics. Visit our booth to meet our team of experts and learn about our newest product offerings.",
      startDate: "October 23, 2023",
      endDate: "October 27, 2023",
      location: "Las Vegas, NV, USA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      website: "https://west.supplysideshow.com",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Vitafoods Asia 2023",
      description: "Star Hi Herbs will be exhibiting at Vitafoods Asia, the leading nutraceutical event in the Asia Pacific region. Stop by our booth to discover our innovative botanical extracts and discuss potential collaborations.",
      startDate: "September 20, 2023",
      endDate: "September 22, 2023",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      website: "https://www.vitafoodsasia.com",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Natural Products Expo East 2023",
      description: "We're excited to participate in Natural Products Expo East, where we'll be presenting our organic certified extracts and sustainable sourcing initiatives. Schedule a meeting with our team to discuss your specific needs.",
      startDate: "September 28, 2023",
      endDate: "October 1, 2023",
      location: "Philadelphia, PA, USA",
      image: "https://images.unsplash.com/photo-1475721027785-f74ec9904410?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      website: "https://www.expoeast.com",
      status: "upcoming"
    },
    {
      id: 4,
      title: "CPhI Worldwide 2022",
      description: "Star Hi Herbs exhibited at CPhI Worldwide, the largest pharmaceutical exhibition globally. We presented our pharmaceutical-grade extracts and met with partners from around the world.",
      startDate: "November 1, 2022",
      endDate: "November 3, 2022",
      location: "Frankfurt, Germany",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      website: "https://www.cphi.com/europe/",
      status: "past"
    },
    {
      id: 5,
      title: "Fi & Hi India 2022",
      description: "We had a successful exhibition at Food Ingredients & Health Ingredients India, where we showcased our range of natural extracts for the food and beverage industry.",
      startDate: "September 21, 2022",
      endDate: "September 23, 2022",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1526285759904-71d5137e483a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      website: "https://www.figlobal.com/india/",
      status: "past"
    },
    {
      id: 6,
      title: "Vitafoods Europe 2022",
      description: "Star Hi Herbs participated in Vitafoods Europe, connecting with nutraceutical manufacturers and discussing the latest trends in botanical extracts and probiotics.",
      startDate: "May 10, 2022",
      endDate: "May 12, 2022",
      location: "Geneva, Switzerland",
      image: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      website: "https://www.vitafoods.eu.com",
      status: "past"
    }
  ];

  const filteredEvents = events.filter(event => event.status === activeTab);

  return (
    <PageLayout title="Events">
      <PageHeader
        title="Events & Exhibitions"
        subtitle="Connect with Star Hi Herbs at industry events around the world"
        backgroundImage="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container-wide py-16">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md border border-gray-200 p-1">
            <Button
              variant={activeTab === "upcoming" ? "default" : "ghost"}
              className={activeTab === "upcoming" ? "" : "text-gray-500"}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </Button>
            <Button
              variant={activeTab === "past" ? "default" : "ghost"}
              className={activeTab === "past" ? "" : "text-gray-500"}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <Card key={event.id} className="overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <CalendarDays className="h-4 w-4 text-herb-600" />
                    <span>{event.startDate}{event.endDate !== event.startDate ? ` - ${event.endDate}` : ""}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-herb-800">{event.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 text-herb-600" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
                {event.website && (
                  <Button variant="outline" className="w-full mt-2" asChild>
                    <a href={event.website} target="_blank" rel="noopener noreferrer">
                      Visit Event Website
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {activeTab === "upcoming" && (
                  <Button className="w-full mt-2">Schedule Meeting</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">No {activeTab} events at the moment</h3>
            <p className="mt-2 text-gray-400">
              {activeTab === "upcoming" 
                ? "Check back soon for new event announcements" 
                : "We haven't recorded any past events yet"}
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Events;
