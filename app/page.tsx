import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24"
        >
          {/* text  */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Full-stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Besufekad Alemu</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in creating seamless digital experiences and possess
              expertise in a wide range of programming languages and
              technologies.
            </p>
            {/* button and socials */}
            <div>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
            </div>
          </div>
          {/* photo */}
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
