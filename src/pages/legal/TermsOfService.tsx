
import PageLayout from "@/components/layout/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout title="Terms of Service">
      <div className="bg-gray-50 py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-4">Last Updated: June 1, 2023</p>
            
            <div className="prose max-w-none">
              <p>
                These Terms of Service ("Terms") govern your access to and use of the Star Hi Herbs Private Limited ("Star Hi Herbs," "we," "us," or "our") website, products, and services. Please read these Terms carefully before using our services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Acceptance of Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our website or services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Products and Services</h2>
              <p>
                Star Hi Herbs manufactures and distributes botanical extracts, organic herbal extracts, and probiotics for the pharmaceutical, nutraceutical, food, and cosmetic industries. All products are subject to availability and we reserve the right to discontinue any product at any time.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Ordering and Payment</h2>
              <p>
                When you place an order through our website or other channels, you agree to provide accurate and complete information. We reserve the right to refuse or cancel any order for any reason, including errors in product or pricing information.
              </p>
              <p>
                Payment terms will be specified in your purchase order or contract. Unless otherwise agreed, payment is due within 30 days of invoice date. Late payments may be subject to interest charges.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Shipping and Delivery</h2>
              <p>
                Shipping times and methods will be agreed upon at the time of order. We are not responsible for delays in delivery due to customs clearance or other circumstances beyond our control.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Product Quality and Returns</h2>
              <p>
                Star Hi Herbs is committed to providing high-quality products. All products are manufactured according to strict quality control standards. If you are not satisfied with your purchase, please contact us within 14 days of receipt to discuss return options.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of Star Hi Herbs or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">User Accounts</h2>
              <p>
                If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
              <p>
                In no event shall Star Hi Herbs be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use, arising out of or in connection with these Terms or the use or inability to use our services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Star Hi Herbs and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of our services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Changes to These Terms</h2>
              <p>
                We may modify these Terms at any time by posting the updated terms on our website. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
