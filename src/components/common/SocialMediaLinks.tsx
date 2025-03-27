
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

interface SocialMediaLinksProps {
  className?: string;
  iconSize?: number;
  color?: string;
}

const SocialMediaLinks = ({ 
  className = "", 
  iconSize = 20, 
  color = "text-gray-600 hover:text-herb-600" 
}: SocialMediaLinksProps) => {
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/starhiherbs", name: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/starhiherbs", name: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com/company/starhiherbs", name: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/starhiherbs", name: "Instagram" },
    { icon: Youtube, url: "https://youtube.com/starhiherbs", name: "YouTube" }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a 
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${color}`}
            aria-label={`Visit our ${social.name} page`}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
