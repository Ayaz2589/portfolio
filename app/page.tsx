import {
  Intro,
  SectionDivder,
  AboutMe,
  Skills,
  Experience,
  Contact,
  Footer,
  UserExperience,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 backdrop-blur-md md:p-24">
      <Intro />
      <SectionDivder />
      <AboutMe />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <UserExperience />
      <Contact />
      <Footer />
    </main>
  );
}
