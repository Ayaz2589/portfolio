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
    <main className="h-full w-full snap-y snap-mandatory overflow-y-scroll backdrop-blur-md">
      <section className="flex h-screen w-full snap-start items-center justify-center">
        <Intro />
      </section>
      <section className="flex h-screen w-full snap-start items-center justify-start">
        <AboutMe />
      </section>
    </main>
  );
}
