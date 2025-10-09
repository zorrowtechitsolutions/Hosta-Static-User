import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { VideoSection } from "@/components/video-section"
import { StatsSection } from "@/components/stats-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen  bg-gradient-to-b from-emerald-100 to-white">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <VideoSection />
      <Footer />
    </main>
  )
}
