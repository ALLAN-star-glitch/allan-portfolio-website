import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaBehance,
  FaTwitter,
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaPenNib,
  FaUser,
  FaAward,
  FaBriefcase
} from "react-icons/fa";

export const navLinks = [
  { name: "Home", href: "/", icon: <FaHome size={18} /> },
  { name: "About", href: "/about", icon: <FaUser size={18} /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram size={18} /> },
  { name: "Skills", href: "/skills", icon: <FaTools size={18} /> },
  { name: "Services", href: "/services", icon: <FaBriefcase size={18} /> },
  { name: "Blog", href: "/blog", icon: <FaPenNib size={18} /> },
  { name: "Achievements", href: "/achievements", icon: <FaAward size={18} /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope size={18} /> },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ALLAN-star-glitch",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/allan-mathenge-534a36239/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/allanmathenge",
    icon: <FaFacebook size={20} />,
  },
  {
    name: "Behance",
    href: "https://behance.net/allanmathenge",
    icon: <FaBehance size={20} />,
  },
  {
    name: "Twitter",
    href: "https://x.com/mathenge_a23811",
    icon: <FaTwitter size={20} />,
  },
];
