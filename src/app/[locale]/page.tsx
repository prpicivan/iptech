import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("About");
  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      <Hero />
      <Services />
      <div id="about" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
            {t("badge")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
            {t("title")} <span className="gradient-text">{t("titleAccent")}</span>
          </h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            {t("mission")}
          </p>
          <p className="text-slate-500 mt-8 font-medium">
            — {t("author")}
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
