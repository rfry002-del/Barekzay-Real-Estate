"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, X } from "lucide-react"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* TITLE */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm tracking-widest uppercase">
                Watch Our Story
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              See How We Help Clients{" "}
              <span className="gold-text">Succeed</span>
            </h2>
          </div>

          {/* VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* AUTO PLAY VIDEO PREVIEW */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

            {/* BORDER */}
            <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl" />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-xl">
                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Watch how Barekzay Real Estate supports buyers, sellers, and investors.
          </p>
        </motion.div>
      </div>

      {/* MODAL VIDEO */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsPlaying(false)}
        >
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white hover:text-gold"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-cover"
              src="/video/1.mp4"
              autoPlay
              controls
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}