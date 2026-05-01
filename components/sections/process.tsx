"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Search, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us Your Goal",
    description: "Share whether you want to buy, sell, rent, or invest.",
  },
  {
    icon: Search,
    number: "02",
    title: "Get Expert Guidance",
    description: "We review your needs, market options, and best opportunities.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Move Forward With Confidence",
    description: "We help negotiate, manage, and complete the transaction professionally.",
  },
]

export function Process() {
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                How It Works
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Our Simple <span className="gold-text">3-Step Process</span>
            </motion.h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold/50 to-gold/20" />
                )}

                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-gold/50 transition-all duration-300 text-center group">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-primary-foreground text-sm font-bold rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
