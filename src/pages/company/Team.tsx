
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <PageLayout title="Our Team">
      <div className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground">
              The experts behind Star Hi Herbs' commitment to quality and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Leadership Team Members */}
            <TeamMember
              name="Najish N.N"
              position="Global Marketing Head"
              bio="Leading our global marketing initiatives with over 10 years of experience in the herbal extract industry."
              image="/placeholder.svg"
            />
            
            <TeamMember
              name="Dr. Lakshmi Prakash"
              position="Chief Scientific Officer"
              bio="With a Ph.D. in Pharmacognosy and 20+ years of research experience in botanical extracts."
              image="/placeholder.svg"
            />
            
            <TeamMember
              name="Vikram Singh"
              position="Director of Operations"
              bio="Overseeing production facilities and ensuring efficient processes with expertise in pharmaceutical manufacturing."
              image="/placeholder.svg"
            />
            
            <TeamMember
              name="Dr. Anil Kumar"
              position="Head of R&D"
              bio="Leading our research initiatives to develop innovative and effective herbal extract formulations."
              image="/placeholder.svg"
            />
            
            <TeamMember
              name="Sanjay Mehta"
              position="Quality Assurance Director"
              bio="Ensuring all our products meet the highest standards of quality and compliance."
              image="/placeholder.svg"
            />
            
            <TeamMember
              name="Priya Sharma"
              position="Sustainability Manager"
              bio="Championing our eco-friendly practices and ethical sourcing initiatives."
              image="/placeholder.svg"
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
