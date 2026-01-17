import {
  Intro,
  SectionDivider,
  AboutMe,
  Skills,
  Experience,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Intro />
      <AboutMe />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
