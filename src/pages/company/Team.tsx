
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/common/PageHeader";

const Team = () => {
  return (
    <PageLayout title="Our Team">
      <PageHeader 
        title="Our Team" 
        subtitle="The experts behind Star Hi Herbs' commitment to quality and innovation."
        backgroundImage="/lovable-uploads/cec6ab29-75a3-4173-a5ea-4330d94d32e0.png"
      />
      
      <div className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Leadership Team Members */}
            <TeamMember
              name="Najish N.N"
              position="Global Marketing Head"
              bio="Leading our global marketing initiatives with over 10 years of experience in the herbal extract industry."
              image="/lovable-uploads/d24d94f9-3643-41ba-b761-58f10ec44a45.png"
            />
            
            <TeamMember
              name="Dr. Lakshmi Prakash"
              position="Chief Scientific Officer"
              bio="With a Ph.D. in Pharmacognosy and 20+ years of research experience in botanical extracts."
              image="/lovable-uploads/74f8d5e8-c619-4e61-9c35-31510b8599a2.png"
            />
            
            <TeamMember
              name="Vikram Singh"
              position="Director of Operations"
              bio="Overseeing production facilities and ensuring efficient processes with expertise in pharmaceutical manufacturing."
              image="/lovable-uploads/e6620852-d3c3-4556-bb57-56e955728801.png"
            />
            
            <TeamMember
              name="Dr. Anil Kumar"
              position="Head of R&D"
              bio="Leading our research initiatives to develop innovative and effective herbal extract formulations."
              image="/lovable-uploads/e6926542-c2db-4874-9287-11153b1b5d2a.png"
            />
            
            <TeamMember
              name="Sanjay Mehta"
              position="Quality Assurance Director"
              bio="Ensuring all our products meet the highest standards of quality and compliance."
              image="/lovable-uploads/7d9049e2-60e1-4d74-84e3-5fd35d36460f.png"
            />
            
            <TeamMember
              name="Priya Sharma"
              position="Sustainability Manager"
              bio="Championing our eco-friendly practices and ethical sourcing initiatives."
              image="/lovable-uploads/d90b1752-0f7d-418e-a679-496142f414c5.png"
            />
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
            <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
              We're always looking for talented individuals who share our passion for natural ingredients and sustainable practices.
            </p>
            <Button asChild size="lg" className="bg-starhi-green hover:bg-starhi-green/90 text-white">
              <a href="/careers">View Career Opportunities</a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, position, bio, image }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1">
      <div className="aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-starhi-green font-medium mb-3">{position}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
};

export default Team;
