import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-auto">
      <div className="container mx-auto py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold">
              <span className="text-white">Besu</span>
              <span className="text-accent">.</span>
            </Link>
            <span className="text-white/30 text-sm">&copy; {currentYear}</span>
          </div>

          {/* Socials */}
          <Social
            containerStyles="flex items-center gap-3"
            iconStyles="w-9 h-9 border border-white/10 rounded-full flex justify-center items-center text-white/50 text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
          />

          {/* Tagline */}
          <p className="text-white/30 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
