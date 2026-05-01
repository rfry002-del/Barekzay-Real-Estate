import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { VideoSection } from "@/components/sections/video-section"
import { About } from "@/components/sections/about"
import { MissionVision } from "@/components/sections/mission-vision"
import { CoreCompetencies } from "@/components/sections/core-competencies"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ServiceAreas } from "@/components/sections/service-areas"
import { Clients } from "@/components/sections/clients"
import { Gallery } from "@/components/sections/gallery"
import { FeaturedProperties } from "@/components/sections/featured-properties"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { CTA } from "@/components/sections/cta"
import { GoogleMap } from "@/components/sections/google-map"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <About />
      <MissionVision />
      <CoreCompetencies />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Clients />
      <FeaturedProperties />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <GoogleMap />
      <Footer />
    </main>
  )
}
