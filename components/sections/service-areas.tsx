"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Building, Home, Landmark, Car } from "lucide-react"

const areas = [
  { icon: MapPin, label: "Kabul" },
  { icon: MapPin, label: "Qala-E-Fathullah" },
  { icon: MapPin, label: "Surrounding Kabul Areas" },
  { icon: Home, label: "Residential Properties" },
  { icon: Building, label: "Commercial Properties" },
  { icon: Landmark, label: "Investment Land" },
  { icon: Car, label: "Vehicle Deals" },
]

export function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Where We Operate
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Serving Kabul and <span className="gold-text">Surrounding Areas</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We primarily serve clients in Kabul and surrounding areas, focusing on residential homes, commercial properties, investment lands, and high-value opportunities.
            </motion.p>
          </div>

          {/* Area Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-default"
              >
                <area.icon className="w-5 h-5 text-gold" />
                <span className="text-foreground font-medium">{area.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
