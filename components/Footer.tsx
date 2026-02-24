import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/5 mt-auto"
      style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="container mx-auto py-6 sm:py-7">
        {/* Stack below 1100px, single row at larger widths */}
        <div className="flex flex-col items-center gap-4 min-[1100px]:flex-row min-[1100px]:justify-between min-[1100px]:gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 order-1">
            <Link href="/" className="text-lg font-bold">
              <span className="text-white">Besu</span>
              <span className="text-accent">.</span>
            </Link>
            <span className="text-white/30 text-sm">&copy; {currentYear}</span>
          </div>

          {/* Socials */}
          <div className="order-2 w-full min-[1100px]:w-auto flex justify-center">
            <Social
              containerStyles="flex flex-wrap items-center justify-center gap-3"
              iconStyles="w-9 h-9 border border-white/10 rounded-full flex justify-center items-center text-white/50 text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
            />
          </div>

          {/* Tagline */}
          <p className="text-white/30 text-xs text-center min-[1100px]:text-right order-3 w-full min-[1100px]:w-auto pt-2 border-t border-white/5 min-[1100px]:pt-0 min-[1100px]:border-none">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
