"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "Residential",
    location: "Qala-E-Fathullah, Kabul",
    title: "Modern Family Home",
    description: "Spacious 4-bedroom home with contemporary design and premium finishes.",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    type: "Luxury Villa",
    location: "Central Kabul",
    title: "Executive Villa",
    description: "Prestigious 5-bedroom villa with private garden and modern amenities.",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    type: "Commercial",
    location: "Business District, Kabul",
    title: "Prime Office Space",
    description: "Modern office building in prime commercial location with high visibility.",
  },
  {
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
    type: "Investment Land",
    location: "Kabul Suburbs",
    title: "Development Opportunity",
    description: "Strategic land parcel ideal for residential or commercial development.",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    type: "Residential",
    location: "Kabul City",
    title: "Contemporary Home",
    description: "Elegant 3-bedroom home with stunning architecture and city views.",
  },
]

export function FeaturedProperties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Property Showcase
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-3xl md:text-4xl font-bold text-foreground"
              >
                Featured <span className="gold-text">Opportunities</span>
              </motion.h2>
            </div>

            {/* Navigation Arrows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3"
            >
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex gap-6">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3"
                >
                  <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-primary-foreground text-xs font-medium rounded-full">
                        {property.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        {property.location}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                        {property.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {property.description}
                      </p>
                      <Link href="#contact">
                        <Button
                          variant="outline"
                          className="w-full border-gold/50 hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
