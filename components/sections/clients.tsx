"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User, Home, TrendingUp, Building2, Users } from "lucide-react"

const clientTypes = [
  {
    icon: User,
    title: "Individual Buyers",
    description: "First-time buyers and upgraders looking for their dream home",
  },
  {
    icon: Home,
    title: "Property Sellers",
    description: "Owners seeking maximum value for their properties",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Strategic investors building long-term wealth",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description: "Commercial clients seeking ideal business locations",
  },
  {
    icon: Users,
    title: "Families",
    description: "Families seeking trusted real estate services",
  },
]

export function Clients() {
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
                Our Clients
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Who We <span className="gold-text">Serve</span>
            </motion.h2>
          </div>

          {/* Client Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group text-center p-6 bg-card rounded-2xl border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <client.icon className="w-8 h-8 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">{client.title}</h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
