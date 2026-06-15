import Hero from "@/components/sections/Hero";
import AppDeconstruction from "@/components/sections/AppDeconstruction";
import PinnedStatement from "@/components/sections/PinnedStatement";
import AppsTeaser from "@/components/sections/AppsTeaser";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppDeconstruction />
      <AppsTeaser />
      <PinnedStatement />
      <Contact />
    </>
  );
}
