
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const PageLayout = ({ children, title, className = "" }: PageLayoutProps) => {
  // Set document title if provided
  if (title) {
    document.title = `${title} | Star Hi Herbs`;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow pt-20 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
