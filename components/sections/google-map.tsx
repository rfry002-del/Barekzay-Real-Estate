"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const locationInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "First Street of Qala-E-Fathullah\nKabul, Afghanistan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+93 78000 5396\n+93 785 517210\n+93 777 284420\n+1 540-836-3323",
  },
  {
    icon: Mail,
    label: "Email",
    value: "barekzayrealestate@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri: 9:00am–5:00pm",
  },
]

export function GoogleMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Find Us
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Visit Our <span className="gold-text">Office</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Find us easily in Kabul — we&apos;re here to help you in person.
            </motion.p>
          </div>

          {/* Map & Info Grid */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3 relative rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.0!2d69.1724!3d34.5281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sQala-E-Fathullah%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              {/* Gold Border */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl pointer-events-none group-hover:border-gold/50 transition-all duration-300" />
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Location Details
                </h3>

                <div className="space-y-6">
                  {locationInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-foreground font-medium whitespace-pre-line text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Get Directions Button */}
                <Link
                  href="https://www.google.com/maps/search/Qala-E-Fathullah,+Kabul,+Afghanistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8"
                >
                  <Button className="w-full bg-gold hover:bg-gold-dark text-black transition-all duration-300 hover:scale-[1.02]">
                    Get Directions
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
