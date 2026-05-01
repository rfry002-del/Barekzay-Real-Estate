"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Banknote, Key, LineChart, Landmark, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Buying Services",
    description:
      "We assist clients in identifying suitable properties based on their needs, budget, and preferred location. Our team ensures a smooth process from search to closing.",
  },
  {
    icon: Banknote,
    title: "Selling Services",
    description:
      "We help property owners market and sell their assets effectively by targeting the right buyers and negotiating the best value.",
  },
  {
    icon: Key,
    title: "Rental Services",
    description:
      "We manage both short-term and long-term rental agreements, connecting landlords with reliable tenants.",
  },
  {
    icon: LineChart,
    title: "Investment Consulting",
    description:
      "We provide insights into high-potential real estate opportunities, helping clients build long-term wealth.",
  },
  {
    icon: Landmark,
    title: "Land & Vehicle Deals",
    description:
      "In addition to real estate, we facilitate land and vehicle transactions, offering flexible investment options.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-secondary/30">
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
                What We Offer
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Real Estate Services Built Around <span className="gold-text">Your Goals</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive solutions for every step of your real estate journey
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="relative font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="relative flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Discuss Your Needs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
