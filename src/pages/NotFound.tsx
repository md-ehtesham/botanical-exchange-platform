
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container-tight py-20 text-center">
          <div className="inline-block px-4 py-1 bg-herb-100 text-herb-700 rounded-full text-sm font-medium mb-6">
            404 Error
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Button variant="primary" size="lg" asChild href="/">
            Return to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
