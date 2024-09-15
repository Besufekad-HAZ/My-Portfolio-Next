import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Besufekad-HAZ",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/besufekadalemu",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@besufekadalemu8443",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/besufekad77",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
