import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Competence } from "@/components/sections/competence";
import { Team } from "@/components/sections/team";
import { Links } from "@/components/sections/links";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Competence />
      <Team />
      <Links />
      <Contact />
    </main>
  );
}