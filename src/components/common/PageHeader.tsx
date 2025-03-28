
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHeader = ({
  title,
  subtitle,
  backgroundImage = "/lovable-uploads/2f40721d-b1fd-4594-a49d-ba85da03ed4b.png",
  children,
}: PageHeaderProps) => {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-herb-700/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-herb-100">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
