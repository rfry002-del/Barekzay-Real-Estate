"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Award, CheckCircle } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              About <span className="gold-text">Barekzay Real Estate</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              Barekzay Real Estate is a well-established real estate firm located on First Street of Qala-E-Fathullah, Kabul, Afghanistan. With over 20 years of industry experience, we provide comprehensive real estate solutions including buying, selling, renting, and investment consulting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Our expertise spans residential properties, commercial properties, land opportunities, and vehicle transactions. We are committed to delivering reliable, transparent, and results-driven services tailored to each client&apos;s goals.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              {[
                "Comprehensive real estate solutions",
                "Expert guidance for all property types",
                "Transparent and client-focused approach",
                "Deep local market knowledge",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image & Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="images/2.png"
                alt="Barekzay Real Estate Professional"
                width={600}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Gold Border Overlay */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}