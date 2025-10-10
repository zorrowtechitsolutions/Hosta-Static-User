import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, Stethoscope, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Verified Doctors",
    description: "Qualified healthcare professionals",
  },
  {
    icon: Stethoscope,
    number: "30+",
    label: "Medical Specialties",
    description: "Comprehensive healthcare coverage",
  },
  {
    icon: Building2,
    number: "100+",
    label: "Partner Hospitals",
    description: "Trusted healthcare facilities",
  },
  {
    icon: MapPin,
    number: "24/7",
    label: "Emergency Services",
    description: "Round-the-clock availability",
  },
]

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold  mb-4 text-balance text-[#047857]">
            Healthcare Network You Can Trust
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-pretty text-gray-600">
            Our growing network of verified healthcare providers ensures you get the best care possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className=" rounded-full p-4 w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8  text-[#047857]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold  mb-2 text-gray-600">{stat.number}</div>
                <div className="text-lg font-semibold  mb-1 text-[#047857]">{stat.label}</div>
                <div className="text-sm  text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
