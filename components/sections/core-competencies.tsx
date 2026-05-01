"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Home,
  Building2,
  TrendingUp,
  MapPin,
  Car,
  BarChart3,
  FileText,
} from "lucide-react"

const competencies = [
  {
    icon: Home,
    title: "Property Buying and Selling",
    description: "Expert assistance in property transactions",
  },
  {
    icon: Building2,
    title: "Residential & Commercial Leasing",
    description: "Comprehensive rental solutions",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Investment Advisory",
    description: "Strategic investment guidance",
  },
  {
    icon: MapPin,
    title: "Land Acquisition & Development",
    description: "Prime land opportunities",
  },
  {
    icon: Car,
    title: "Vehicle Buying and Selling",
    description: "Trusted vehicle transactions",
  },
  {
    icon: BarChart3,
    title: "Property Valuation & Analysis",
    description: "Accurate market assessments",
  },
  {
    icon: FileText,
    title: "Negotiation & Contract Management",
    description: "Professional deal handling",
  },
]

export function CoreCompetencies() {
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
                Our Expertise
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Core <span className="gold-text">Competencies</span>
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {competencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
