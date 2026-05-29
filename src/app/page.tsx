import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Currently from "@/components/Currently";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-[#070707] text-white">
      <Navbar />
      <div id="about">
        <ScrollyCanvas />
      </div>
      <div id="currently">
        <Currently />
      </div>
      {/* All sections below use frame_119 as a fixed background */}
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/sequence/frame_119_delay-0.066s.png')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative z-10">
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Timeline />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
