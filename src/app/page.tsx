import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-clip">
      {/* Multi-Layer Parallax Background covering the entire page from Hero to Contact */}
      <ParallaxBackground />

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
