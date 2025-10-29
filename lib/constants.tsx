import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/allanmathenge",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/allanmathenge",
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
    href: "https://twitter.com/allanmathenge",
    icon: <FaTwitter size={20} />,
  },
];
