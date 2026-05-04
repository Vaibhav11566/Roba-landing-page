import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Products />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
