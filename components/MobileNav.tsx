"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center w-10 h-10 rounded-full glass hover:border-accent/50 transition-all duration-300"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-2xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary/95 backdrop-blur-xl border-l border-white/10">
        {/* logo */}
        <div className="mt-20 mb-16 text-center">
          <Link href="/">
            <h1 className="text-3xl font-bold">
              <span className="text-white">Besu</span>
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={index}
                className={`
                  relative px-6 py-3 text-lg font-medium transition-all duration-300 rounded-full
                  ${
                    isActive
                      ? "text-primary bg-accent"
                      : "text-white/80 hover:text-accent hover:bg-white/5"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
