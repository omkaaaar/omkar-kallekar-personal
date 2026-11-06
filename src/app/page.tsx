import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-clip">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
