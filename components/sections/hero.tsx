"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, MapPin, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: MapPin, label: "Kabul Market Experts" },
  { icon: Users, label: "Trusted Real Estate Advisors" },
  { icon: TrendingUp, label: "Buy • Sell • Invest • Succeed" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-luxury-home.jpg"
          alt="Luxury home"
          fill
          priority
          className="object-cover"
        />

        {/* DARK MODE OVERLAY */}
        <div className="absolute inset-0 bg-black/80 dark:bg-black/80 light:bg-black/40" />

        {/* EXTRA GRADIENT FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-4xl pl-[50px]">

          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-widest text-sm">
              Barekzay Real Estate
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white light:text-gray-900 mb-4"
          >
            Your Goals.
            <br />
            <span className="text-gold">Our Mission.</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 dark:text-white/90 light:text-gray-700 mb-6 max-w-2xl"
          >
            Trusted real estate guidance for buying, selling, renting, and investing in Kabul and surrounding areas.
          </motion.p>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base text-white/70 dark:text-white/70 light:text-gray-600 mb-10 max-w-xl"
          >
            With over 20 years of experience, Barekzay Real Estate helps clients make confident property decisions through local market knowledge and expert negotiation.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mb-16 flex-wrap"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-yellow-500 text-black font-semibold px-8 py-6 hover:scale-105 transition-all"
              >
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="
                  border-white/40 
                  text-white 
                  dark:text-white 
                  light:text-gray-900
                  bg-white/10 
                  hover:bg-white/20 
                  hover:scale-105 
                  backdrop-blur-md
                  px-8 py-6
                "
              >
                View Services
              </Button>
            </Link>
          </motion.div>

          {/* TRUST BADGES (UPGRADED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="
                  flex items-center gap-3 p-4 rounded-2xl
                  bg-white/10 dark:bg-black/40
                  backdrop-blur-md
                  border border-white/20 dark:border-gold/30
                  shadow-lg
                "
              >
                <badge.icon className="h-6 w-6 text-gold" />
                <span className="text-sm font-medium text-white dark:text-white light:text-gray-900">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold mt-2 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}