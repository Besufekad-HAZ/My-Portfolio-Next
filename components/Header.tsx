"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 xl:py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center glass-dark rounded-full px-6 py-3">
          {/* logo */}
          <Link href="/" className="group">
            <h1 className="text-2xl xl:text-3xl font-bold tracking-tight">
              <span className="text-white group-hover:text-accent transition-colors duration-300">
                Besu
              </span>
              <span className="text-accent">.</span>
            </h1>
          </Link>

          {/* desktop nav & hire me button */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button className="glow-box">Hire me</Button>
            </Link>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
