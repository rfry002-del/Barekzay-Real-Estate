"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

const reasons = [
  "Over 20 years of proven experience in the Kabul market",
  "Strong local market knowledge and network",
  "Client-focused and transparent approach",
  "Skilled negotiation ensuring maximum value",
  "Reliable and efficient transaction management",
  "Commitment to long-term client relationships",
]

export function WhyChooseUs() {
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
          className="max-w-5xl mx-auto"
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
                Our Difference
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Why Choose <span className="gold-text">Barekzay Real Estate?</span>
            </motion.h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <Check className="w-5 h-5 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <p className="text-foreground font-medium pt-2">{reason}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 p-8 rounded-2xl bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20"
          >
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "50+", label: "Homes Sold" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold gold-text mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
