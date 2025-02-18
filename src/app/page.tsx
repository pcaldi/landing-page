import { About } from "@/app/_components/about";
import { Hero } from "@/app/_components/hero";
import { Services } from "@/app/_components/services";
import { Testimonials } from "@/app/_components/testimonials";
import { Footer } from "@/app/_components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
