"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useCallback, useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: "Ahmad Rahimi",
    role: "Home Buyer",
    content:
      "Barekzay Real Estate helped my family find the right home with honesty and patience. Their local knowledge and dedication made the entire process smooth and stress-free.",
    rating: 5,
  },
  {
    name: "Fatima Karimi",
    role: "Property Seller",
    content:
      "Professional service, strong market knowledge, and excellent communication from start to finish. They sold my property quickly and at a great price.",
    rating: 5,
  },
  {
    name: "Mohammad Nazari",
    role: "Investor",
    content:
      "They helped me sell my property at a great value. Very reliable and transparent. I highly recommend their services for anyone looking to invest in Kabul real estate.",
    rating: 5,
  },
  {
    name: "Sarah Ahmadi",
    role: "Business Owner",
    content:
      "Great team for investment advice in Kabul. I felt confident throughout the process. Their expertise in commercial properties is unmatched.",
    rating: 5,
  },
  {
    name: "Khalid Barakzai",
    role: "Family Client",
    content:
      "Outstanding service and genuine care for their clients. They went above and beyond to find us the perfect family home. Truly a trustworthy partner.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-24 bg-background">
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
                Client Stories
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              What Our <span className="gold-text">Customers Say</span>
            </motion.h2>
          </div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-none w-full px-4"
                  >
                    <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-gold fill-gold"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Author */}
                      <div>
                        <p className="font-serif text-lg font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gold">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-gold w-6"
                        : "bg-gold/30 hover:bg-gold/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
