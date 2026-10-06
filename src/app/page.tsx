import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Marketplaces } from "@/components/sections/marketplaces";
import { Nav } from "@/components/sections/nav";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marketplaces />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
