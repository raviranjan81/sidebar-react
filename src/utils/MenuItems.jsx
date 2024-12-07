import { FaHome, FaUser, FaServicestack, FaEnvelope, FaChevronDown } from "react-icons/fa";

export const adminMenus = [
  {
    name: "Home",
    icon: <FaHome />,
    link: "/home",
  },
  {
    name: "About",
    icon: <FaUser />,
    link: "/about",
    subMenu: [
      { name: "Team", link: "/about/team" },
      { name: "Careers", link: "/about/careers" },
    ],
  },
  {
    name: "Services",
    icon: <FaServicestack />,
    link: "/services",
    subMenu: [
      { name: "Web Development", link: "/services/web" },
      { name: "Mobile Development", link: "/services/mobile" },
    ],
  },
  {
    name: "Contact",
    icon: <FaEnvelope />,
    link: "/contact",
  },
];


