
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const CSR = () => {
  return (
    <PageLayout title="CSR Initiatives">
      <PageHeader
        title="Corporate Social Responsibility"
        subtitle="Making a positive impact on communities and the environment"
        backgroundImage="https://images.unsplash.com/photo-1610373308416-5d6e4b20d31e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container-wide py-8 md:py-16">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-herb-700">Community Support</h3>
              <p className="text-gray-600">
                We actively engage with and invest in the communities where we operate, 
                supporting local farmers with fair trade practices and providing education 
                and healthcare initiatives in rural areas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-herb-700">Environmental Stewardship</h3>
              <p className="text-gray-600">
                Star Hi Herbs is committed to reducing our environmental footprint through 
                sustainable farming practices, water conservation, and renewable energy 
                implementation across our facilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-herb-700">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We ensure fair compensation for farmers and suppliers, promote sustainable 
                agricultural practices, and maintain strict standards for ethical harvesting 
                of botanical resources.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 md:mt-16">
          <h2 className="text-2xl font-bold mb-4 md:mb-6 text-herb-800">Our CSR Initiatives</h2>
          <div className="space-y-4 md:space-y-8">
            <div className="bg-herb-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 md:mb-3 text-herb-700">Farmer Training Programs</h3>
              <p className="text-gray-600 mb-3 md:mb-4">
                We conduct regular training programs for farmers on sustainable farming practices, 
                organic cultivation methods, and post-harvest handling to improve yields and quality.
              </p>
            </div>

            <div className="bg-herb-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 md:mb-3 text-herb-700">Educational Sponsorship</h3>
              <p className="text-gray-600 mb-3 md:mb-4">
                Star Hi Herbs sponsors education for children in farming communities, providing 
                scholarships, school supplies, and infrastructure support to local schools.
              </p>
            </div>

            <div className="bg-herb-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 md:mb-3 text-herb-700">Reforestation Projects</h3>
              <p className="text-gray-600 mb-3 md:mb-4">
                We actively participate in reforestation programs to restore native plant species 
                and maintain biodiversity in areas affected by deforestation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CSR;
