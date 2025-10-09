import { Heart, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import logo  from "@/../public/logo.webp"


export function Footer() {
  return (
    <footer className=" text-gray-600 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-2 shadow-lg">
                  <Image width={50} height={50} src={logo} alt="hosta-logo" className="rounded-full" />

              </div>
              <span className="text-2xl font-bold text-[#047857] ">Hosta</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your complete healthcare solution. Connecting you with trusted hospitals, verified doctors, and emergency
              services.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#047857]">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-white transition-colors cursor-pointer">Find Hospitals</li>
              <li className="hover:text-white transition-colors cursor-pointer">Book Doctors</li>
              <li className="hover:text-white transition-colors cursor-pointer">Emergency Ambulance</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blood Bank</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medical Specialties</li>
            </ul>
          </div>

          {/* Medical Systems */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#047857]">Medical Systems</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-white transition-colors cursor-pointer">Allopathy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ayurveda</li>
              <li className="hover:text-white transition-colors cursor-pointer">Homeopathy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Unani</li>
              <li className="hover:text-white transition-colors cursor-pointer">Acupuncture</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#047857]">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>hostahealthcare@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 9400517720</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Healthcare District, Medical City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Hosta. All rights reserved. |
            <span className="hover:text-white transition-colors cursor-pointer ml-1">Privacy Policy</span> |
            <span className="hover:text-white transition-colors cursor-pointer ml-1">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
