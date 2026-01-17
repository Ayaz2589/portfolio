import {
  Intro,
  SectionDivider,
  AboutMe,
  Skills,
  UserExperience,
  Experience,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Intro />
      <AboutMe />
      <Skills />
      <UserExperience />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
