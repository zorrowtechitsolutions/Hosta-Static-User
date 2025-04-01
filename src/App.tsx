import {
  // AppleIcon as AppStore,
  // PlayIcon as GooglePlay,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import splashscreen_icon from "./assets/splash-icon.png";
import hosta_icon from "./assets/HOSTAICON.png";
import { WelcomeAnimation } from "./components/WelcomeAnimation";
import { GoToTopButton } from "./components/GoToTopButton";
import { InstallPWA } from "./components/installPWA";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-emerald-100 to-white flex flex-col">
      <WelcomeAnimation />

      {/* Scrollable content */}
      <div id="scrollable-content" className="flex-1 overflow-auto">
        <GoToTopButton containerId="scrollable-content" />
        {/* Header */}
        <header className="border-b border-white bg-transparent">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 h-10">
              <img
                src={splashscreen_icon}
                alt="HOSTA Logo"
                width={120}
                height={40}
                className="h-14 w-auto border border-green-600 rounded-full mx-4"
              />
            </div>
            <nav className="flex gap-6 mx-4 my-5">
              <a
                href="#platforms"
                className="text-emerald-700 hover:text-emerald-600 hover:font-bold"
              >
                Platforms
              </a>
              <a
                href="#contact"
                className="text-emerald-700 hover:text-emerald-600 hover:font-bold"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
        {/* Hero Section */}
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-4 text-center">
            <img
              src={hosta_icon}
              alt="HOSTA Icon"
              width={120}
              height={120}
              className="mx-auto mb-8 rounded-full border border-green-600"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-700 mb-6">
              Excellence in Healthcare
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              HOSTA is your comprehensive hospital management solution,
              connecting patients with healthcare providers across multiple
              medical systems including Allopathy, Unani, and more.
            </p>
          </div>
        </section>

        {/* Mobile Apps Section */}
        {/* <section id="platforms" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-emerald-700 mb-12">
              Get the HOSTA Mobile App
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <AppStore className="w-6 h-6" />
                <span>Download on App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <GooglePlay className="w-6 h-6" />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </section> */}
        <section>
          <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">
            Get the HOSTA Mobile App
          </h2>
          <InstallPWA />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-emerald-700 mb-12">
              Contact Us
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Whatsapp",
                  url: "https://wa.me/918714412090",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  url: "tel:+918714412090",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  url: "mailto:hostahealthcare@gmail.com",
                },
                {
                  icon: <Instagram className="w-6 h-6" />,
                  title: "Instagram",
                  url: "https://www.instagram.com/hosta_healthcare/?igsh=MnR6d3h0YTJlbXEy",
                },
                {
                  icon: <Facebook className="w-6 h-6" />,
                  title: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61566955145072&mibextid=LQQJ4d&rdid=rUkuyexGh2CyFoDD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CL6WSxXSq%2F%3Fmibextid%3DLQQJ4d#",
                },
              ].map((elements) => {
                return (
                  <a
                    key={elements.title}
                    href={elements.url}
                    target="_blank"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors"
                  >
                    {elements.icon}
                    <span>{elements.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} HOSTA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
