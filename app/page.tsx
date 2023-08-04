import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col p-24 w-[80em] m-auto">
        <Hero />
        <Projects />
      </section>
    </>
  );
}
