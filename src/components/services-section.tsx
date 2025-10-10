import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hospital, UserCheck, Stethoscope, Ambulance, Droplets, Activity } from "lucide-react"

const services = [
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Discover trusted hospitals across multiple medical systems, all in one app.",
    features: [
      "Verified partner hospitals with reliable healthcare services",
      "Multi-system support: Allopathy, Ayurveda, Homeopathy, Unani, Acupuncture & more",
      "Book appointments instantly with just a few taps",
      "Find hospitals nearest to your location",
    ],
  },
  {
    icon: UserCheck,
    title: "Doctors",
    description: "Connect with experienced and verified doctors anytime.",
    features: [
      "Wide range of specialists: General Physicians, Surgeons, Pediatricians, Gynecologists, Dentists & more",
      "Qualified experts across Allopathy, Ayurveda, Homeopathy & alternative systems",
      "Easy appointment booking and teleconsultation options",
      "Growing network with hundreds of doctors onboard",
    ],
  },
  {
    icon: Stethoscope,
    title: "Specialities",
    description: "Hosta covers all major healthcare specialties.",
    features: [
      "General Medicine, Cardiology, Dermatology, Orthopedics",
      "Pediatrics, Gynecology, Dentistry, ENT, Neurology",
      "Ayurveda Therapies, Homeopathy Treatments",
      "30+ medical specialties and growing",
    ],
  },
  {
    icon: Ambulance,
    title: "Ambulance",
    description: "Emergency help at your fingertips.",
    features: [
      "24/7 ambulance booking through Hosta",
      "GPS-enabled tracking for faster arrival",
      "Verified ambulance service providers",
      "Equipped for urgent and critical care",
    ],
  },
  {
    icon: Droplets,
    title: "Blood Bank",
    description: "Save lives with Hosta's integrated blood bank feature.",
    features: [
      "Instantly request blood from nearby donors or banks",
      "Register as a donor and help others in need",
      "Verified donors and safe blood bank connections",
      "Supports all blood groups, including rare types",
    ],
  },
  {
    icon: Activity,
    title: "Medical Systems",
    description: "Find hospitals across multiple medical systems.",
    features: [
      "Allopathy - Modern medicine and treatments",
      "Homeopathy - Natural healing approaches",
      "Ayurveda - Traditional Indian medicine",
      "Unani, Acupuncture & other alternative healthcare",
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold  mb-4 text-balance text-[#047857]">
            Complete Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for your healthcare journey, from finding the right doctor to emergency services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-white hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up card-shadow border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className=" rounded-lg p-3 w-fit mb-4">
                  <service.icon className="h-8 w-8  text-[#047857]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#047857]">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
