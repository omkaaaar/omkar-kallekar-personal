import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PaperAirplaneScroll from "@/components/PaperAirplaneScroll";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-clip">
      <PaperAirplaneScroll />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
