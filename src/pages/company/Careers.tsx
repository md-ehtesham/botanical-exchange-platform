
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Responsible for ensuring all herbal extracts meet our rigorous quality standards through testing and documentation."
    },
    {
      id: 2,
      title: "R&D Scientist",
      department: "Research & Development",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Develop new extraction techniques and formulations to expand our product offerings while improving efficacy."
    },
    {
      id: 3,
      title: "Business Development Manager",
      department: "Sales",
      location: "Delhi, India",
      type: "Full-time",
      description: "Build and maintain relationships with key accounts in the pharmaceutical and nutraceutical industries."
    },
    {
      id: 4,
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Chennai, India",
      type: "Full-time",
      description: "Oversee daily production operations, ensuring efficiency, quality, and compliance with safety regulations."
    }
  ];

  return (
    <PageLayout title="Careers">
      <PageHeader
        title="Join Our Team"
        subtitle="Build your career with a global leader in herbal extracts and probiotics"
        backgroundImage="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container-wide py-8 md:py-16">
        <div className="mb-8 md:mb-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-herb-800">Why Work With Us</h2>
          <p className="text-gray-600 mb-6">
            At Star Hi Herbs, we believe our people are our greatest asset. We foster a culture of innovation, 
            collaboration, and continuous learning. Join our diverse team and grow your career while contributing 
            to better health outcomes around the world.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="bg-herb-50 p-4 md:p-5 rounded-lg">
              <h3 className="font-semibold text-herb-700 mb-2">Professional Development</h3>
              <p className="text-sm text-gray-600">Continuous learning opportunities and career advancement paths</p>
            </div>
            <div className="bg-herb-50 p-4 md:p-5 rounded-lg">
              <h3 className="font-semibold text-herb-700 mb-2">Global Exposure</h3>
              <p className="text-sm text-gray-600">Work with international clients and partners across the industry</p>
            </div>
            <div className="bg-herb-50 p-4 md:p-5 rounded-lg">
              <h3 className="font-semibold text-herb-700 mb-2">Innovative Environment</h3>
              <p className="text-sm text-gray-600">Contribute to groundbreaking research and product development</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 md:mb-6 text-herb-800">Open Positions</h2>
          <div className="grid gap-4 md:gap-6">
            {openPositions.map(job => (
              <Card key={job.id} className="overflow-hidden border-l-4 border-l-herb-600">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-herb-700">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-3">
                    <span className="inline-flex items-center text-xs md:text-sm text-gray-500">
                      <Briefcase className="mr-1 h-3 w-3 md:h-4 md:w-4" /> {job.department}
                    </span>
                    <span className="inline-flex items-center text-xs md:text-sm text-gray-500">
                      <MapPin className="mr-1 h-3 w-3 md:h-4 md:w-4" /> {job.location}
                    </span>
                    <span className="inline-flex items-center text-xs md:text-sm text-gray-500">
                      <Clock className="mr-1 h-3 w-3 md:h-4 md:w-4" /> {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{job.description}</p>
                  <Button className="mt-2 text-sm md:text-base">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
