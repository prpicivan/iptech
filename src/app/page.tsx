import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      <Hero />
      <Services />
      <div id="about" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
            Our Story
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
            Experience Meets <span className="gradient-text">Innovation.</span>
          </h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            "There are no stupid questions. By asking questions people are starting to
            create awareness about a particular topic. By creating awareness, the topic
            can be addressed in a correct way. Our biggest strength is being ignorant
            and asking as many questions as needed to create awareness."
          </p>
          <p className="text-slate-500 mt-8 font-medium">
            — IP Technology Mission
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
