
import PageLayout from "@/components/layout/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="bg-gray-50 py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">Last Updated: June 1, 2023</p>
            
            <div className="prose max-w-none">
              <p>
                At Star Hi Herbs Private Limited ("Star Hi Herbs," "we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Register for an account</li>
                <li>Request a quote or product sample</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our customer service team</li>
                <li>Participate in surveys or promotions</li>
                <li>Place an order for our products</li>
              </ul>
              
              <p>The types of information we may collect include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, phone number, and company name</li>
                <li>Billing and shipping address</li>
                <li>Payment information</li>
                <li>Business information, such as industry and product interests</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and fulfill orders and requests</li>
                <li>Send administrative information, such as order confirmations and updates</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Send you marketing communications about our products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>With service providers who perform services on our behalf</li>
                <li>With business partners with whom we jointly offer products or services</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, and safety, and the rights, property, and safety of others</li>
                <li>In connection with a business transaction, such as a merger, acquisition, or sale of assets</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights and Choices</h2>
              <p>You have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access, update, or delete your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Set browser or device preferences regarding cookies and tracking technologies</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">International Data Transfers</h2>
              <p>
                Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Star Hi Herbs Private Limited<br />
                Plot No. 50, 3rd Road, 1st Phase<br />
                K. I. A. D. B. Industrial Area, Jigani<br />
                Bengaluru - 560105, Karnataka, India<br />
                <a href="mailto:info@starhiherbs.com" className="text-starhi-green">info@starhiherbs.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
