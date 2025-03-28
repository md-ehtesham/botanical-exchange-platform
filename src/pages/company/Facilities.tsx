
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Check, MapPin } from "lucide-react";

const Facilities = () => {
  return (
    <PageLayout title="Our Facilities">
      <div className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our State-of-the-Art Facilities</h1>
            <p className="text-lg text-muted-foreground">
              Equipped with advanced technology to deliver premium herbal extracts and ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2 text-starhi-green" /> Corporate Office - Bengaluru
              </h2>
              <p className="mb-6 text-muted-foreground">
                Our corporate headquarters houses our administrative teams, research laboratories, and quality control facilities. Located in the Jigani Industrial Area, our office is the center of our innovation and business operations.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Facility Highlights:</h3>
              <ul className="space-y-2 mb-6">
                <FacilityFeature text="Modern R&D laboratories for product development" />
                <FacilityFeature text="Quality control testing equipment" />
                <FacilityFeature text="Training center for staff development" />
                <FacilityFeature text="Customer experience center" />
              </ul>
              
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Address:</strong> Plot No. 50, 3rd Road, 1st Phase, K.I.A.D.B. Industrial Area, Jigani, Bengaluru - 560105, Karnataka, India
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg" alt="Corporate Office in Bengaluru" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg" alt="Production Facility in Hassan" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2 text-starhi-green" /> Production Facility - Hassan
              </h2>
              <p className="mb-6 text-muted-foreground">
                Our main production facility is located in Hassan, Karnataka, and is equipped with state-of-the-art technology for the extraction and processing of herbal ingredients. This facility follows GMP guidelines and international quality standards.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Facility Features:</h3>
              <ul className="space-y-2 mb-6">
                <FacilityFeature text="Advanced extraction technology" />
                <FacilityFeature text="Clean room facilities for sensitive processes" />
                <FacilityFeature text="Large-scale production capabilities" />
                <FacilityFeature text="Environmentally sustainable infrastructure" />
                <FacilityFeature text="In-house quality testing laboratory" />
              </ul>
              
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Address:</strong> Plot No 105-B, Pharma SEZ, KIADB Industrial Area, Hassan - 573 201
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Visit Our Facilities</h2>
            <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
              Interested in touring our facilities? We welcome clients and partners to visit our operations and see our commitment to quality firsthand.
            </p>
            <Button asChild size="lg" className="bg-starhi-green hover:bg-starhi-green/90 text-white">
              <a href="/contact-us">Schedule a Visit</a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const FacilityFeature = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <Check className="h-5 w-5 text-starhi-green mr-2 mt-0.5 flex-shrink-0" />
    <span>{text}</span>
  </li>
);

export default Facilities;
