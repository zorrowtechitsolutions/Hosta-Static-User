import { Button } from "@/components/ui/button"
import { Heart, Shield, Clock, Users } from "lucide-react"
import logo  from "@/../public/logo.webp"
import Image from "next/image"
import { DownloadSection } from "./download-section"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden  ">
      <div className="absolute inset-0 bg-[url('/medical-pattern-background.jpg')] opacity-5"></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
        <div className="border border-[#047857] rounded-full animate-pulse-green">
  <Image width={100} height={100} src={logo} alt="hosta-logo" className="rounded-full" />
</div>

            <h1 className="text-4xl lg:text-6xl font-bold  ml-4 text-[#047857]">Hosta</h1>
          </div>

          <h2 className="text-2xl lg:text-4xl font-bold  mb-6 text-balance text-gray-600">
            Your Complete Healthcare Solution
          </h2>

          <p className="text-lg lg:text-xl  mb-4 max-w-2xl mx-auto text-pretty text-gray-600">
            Find trusted hospitals, verified doctors, emergency ambulance services, and blood banks all in one app.
            Healthcare made simple, accessible, and reliable.
          </p>

    

                <DownloadSection />
          

          {/* Key Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600">Verified Providers</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600">24/7 Emergency</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600">500+ Doctors</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600">Blood Bank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
