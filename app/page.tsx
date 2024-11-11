import Hero from "./components/aboutme/Hero";
import LogoAnimation from "./components/aboutme/LogoAnimation";
import Portfolio from "./components/aboutme/Portfolio";
import Stack from "./components/aboutme/Stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
    </>
  );
}
