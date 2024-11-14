import Contact from "./components/aboutme/Contact";
import { Footer } from "./components/aboutme/Footer";
import Hero from "./components/aboutme/Hero";
import KeyMetrics from "./components/aboutme/KeyMetrics";
import LogoAnimation from "./components/aboutme/LogoAnimation";
import Navbar from "./components/aboutme/Navbar";
import Portfolio from "./components/aboutme/Portfolio";
import ScrollToTopButton from "./components/aboutme/ScrollToTopButton";
import Services from "./components/aboutme/Services";
import Stack from "./components/aboutme/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <LogoAnimation />
      {/* <Portfolio /> */}
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
