"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`
              relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
              ${
                isActive
                  ? "text-primary bg-accent"
                  : "text-white/80 hover:text-accent hover:bg-white/5"
              }
            `}
          >
            {link.name}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
