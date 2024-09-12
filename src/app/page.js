import { ContactUs } from "./components/contact-us";
import { Features } from "./components/features";
import { HeroSection } from "./components/hero-section";
import { TechSupported } from "./components/tech-supported";
import { WhySekops } from "./components/why-sekops";

export default function Home() {
  return (
    <main className="overflow-hidden relative ">
      <HeroSection></HeroSection>
      <WhySekops></WhySekops>
      <Features></Features>
      <TechSupported></TechSupported>
      <ContactUs></ContactUs>
    </main>
  );
}
