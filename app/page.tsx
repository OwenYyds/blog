import Contact from "./components/aboutme/Contact";
import Hero from "./components/aboutme/Hero";
import KeyMetrics from "./components/aboutme/KeyMetrics";
import LogoAnimation from "./components/aboutme/LogoAnimation";
import Portfolio from "./components/aboutme/Portfolio";
import Services from "./components/aboutme/Services";
import Stack from "./components/aboutme/Stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
    </>
  );
}
