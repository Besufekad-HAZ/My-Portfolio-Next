import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-screen pt-20 xl:pt-24 flex flex-col">
      <div className="container mx-auto flex flex-col flex-1">
        {/* Hero Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-10 py-4 xl:py-6 flex-1">
          {/* Text content */}
          <div className="flex-1 text-center xl:text-left order-2 xl:order-none max-w-2xl">
            {/* Greeting */}
            <span className="inline-block text-accent text-base font-medium mb-1 tracking-wide">
              Hello, I&apos;m
            </span>

            {/* Name */}
            <h1 className="h1 mb-2">
              <span className="text-white">Besufekad</span>
              <br />
              <span className="text-gradient">Alemu</span>
            </h1>

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-3">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Full-stack Developer
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm xl:text-base leading-relaxed mb-5 max-w-lg mx-auto xl:mx-0">
              I specialize in creating seamless digital experiences with
              expertise in modern web technologies. Turning complex problems
              into elegant solutions.
            </p>

            {/* CTA buttons and socials */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start">
              <a
                href="/assets/resume/Resume.pdf"
                download="Besufekad_Resume.pdf"
              >
                <Button
                  variant="outline"
                  size="default"
                  className="group flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </a>

              <Social
                containerStyles="flex items-center gap-3"
                iconStyles="w-10 h-10 border border-accent/50 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,153,0.3)]"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="flex-1 order-1 xl:order-none flex justify-center xl:justify-end">
            <Photo />
          </div>
        </div>

        {/* Stats Section — pushed to bottom */}
        <Stats />
      </div>
    </section>
  );
};

export default Home;
