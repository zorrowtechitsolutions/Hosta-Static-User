"use client"

import { Button } from "@/components/ui/button"
import { Play, Video, Users, Ambulance, Heart } from "lucide-react"
import { useState, useRef } from "react"
import { Card, CardContent } from "./ui/card"

const videos = [
  {
    id: 1,
    title: "How to Book a Doctor Appointment",
    description: "Learn how to easily book appointments with verified doctors through the Hosta app.",
    src: "/videos/vi-1.mp4",
    duration: "2:30",
    icon: Users,
  },
  {
    id: 2,
    title: "Emergency Ambulance Booking",
    description: "Quick guide on how to book emergency ambulance services with GPS tracking.",
    src: "/videos/vi-2.mp4",
    duration: "1:45",
    icon: Ambulance,
  },
  {
    id: 3,
    title: "Blood Bank & Donor Network",
    description: "Discover how to request blood or register as a donor to help save lives.",
    src: "/videos/vi-3.mp4",
    duration: "3:15",
    icon: Heart,
  },
  {
    id: 4,
    title: "Finding Nearby Hospitals",
    description: "Use location services to find the nearest hospitals and healthcare facilities.",
    src: "/videos/vi-4.mp4",
    duration: "2:00",
    icon: Video,
  },
]

export function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const videoRefs = useRef<Record<number, HTMLVideoElement>>({})

  const handlePlayVideo = (videoId: number) => {
    const videoEl = videoRefs.current[videoId]
    if (!videoEl) return

    if (videoEl.paused) {
      videoEl.play()
      setPlayingVideo(videoId)
    } else {
      videoEl.pause()
      setPlayingVideo(null)
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#047857]">See Hosta in Action</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Watch our promotional videos to learn how Hosta makes healthcare accessible and convenient for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Video inside the card */}
                <video
                  ref={(el : any) => el && (videoRefs.current[video.id] = el)}
                  src={video.src}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  controls={false} // hide native controls
                />

                {/* Overlay Play Button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 p-0 animate-pulse-green"
                    onClick={() => handlePlayVideo(video.id)}
                  >
                    {playingVideo === video.id ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Play className="h-6 w-6 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>

                {/* Icon */}
                <div className="absolute top-4 left-4 bg-green-600/90 text-white p-2 rounded-lg">
                  <video.icon className="h-5 w-5" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl text-[#047857] font-bold mb-2 group-hover:text-green-700 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
