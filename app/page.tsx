import {
  Intro,
  SectionDivder,
  AboutMe,
  Experience,
  Contact,
  Footer,
  UserExperience,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center backdrop-blur-md">
      <Intro />
      <AboutMe />
    </main>
  );
}
