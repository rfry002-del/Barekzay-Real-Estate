"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To help clients make confident and profitable real estate decisions through expert guidance and professional service.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become one of the most trusted and leading real estate companies in Afghanistan, known for integrity and excellence.",
    },
  ]

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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                What Drives Us
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Mission & <span className="gold-text">Vision</span>
            </motion.h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-gold/20 hover:border-gold/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <card.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <h3 className="relative font-serif text-2xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl group-hover:border-gold/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
