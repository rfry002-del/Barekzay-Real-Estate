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
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Watch Our Story
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              See How We Help Clients <span className="gold-text">Succeed</span>
            </h2>
          </div>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* Video Thumbnail */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Photo-hstXe4HWt7c1RMvnGd3JbM7QR591bj.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
            </div>

            {/* Gold Border */}
            <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl group-hover:border-gold/60 transition-all duration-300" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/90 flex items-center justify-center shadow-2xl group-hover:bg-gold transition-all duration-300"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/50" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-lg"
          >
            Watch how Barekzay Real Estate supports buyers, sellers, investors, and families through every step of the real estate process.
          </motion.p>
        </motion.div>
      </div>

      {/* Video Modal */}
{isPlaying && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onClick={() => setIsPlaying(false)}
  >
    <button
      onClick={() => setIsPlaying(false)}
      className="absolute top-6 right-6 text-white hover:text-gold transition"
    >
      <X className="w-8 h-8" />
    </button>

    <div
      className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        className="w-full h-full"
        src="video/1.mp4"
        title="Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </motion.div>
)}
    </section>
  )
}
