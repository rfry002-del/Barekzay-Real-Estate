"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of properties do you handle?",
    answer:
      "We handle a wide range of properties including residential homes, commercial buildings, investment properties, land parcels, and even vehicle transactions. Our expertise covers single-family homes, apartments, office spaces, retail locations, and development land throughout Kabul and surrounding areas.",
  },
  {
    question: "Do you help with buying and selling?",
    answer:
      "Yes, we provide comprehensive buying and selling services. For buyers, we help identify suitable properties based on your needs, budget, and preferred location. For sellers, we create strategic marketing plans to maximize property value and connect you with qualified buyers.",
  },
  {
    question: "Do you provide rental services?",
    answer:
      "Absolutely. We manage both short-term and long-term rental agreements. We help landlords find reliable tenants and assist tenants in finding properties that match their requirements. Our rental services include property listing, tenant screening, and lease management.",
  },
  {
    question: "Do you offer real estate investment advice?",
    answer:
      "Yes, investment consulting is one of our core services. We provide insights into high-potential real estate opportunities, market analysis, and strategic guidance to help you build long-term wealth through smart property investments.",
  },
  {
    question: "Do you also help with land and vehicle deals?",
    answer:
      "Yes, in addition to traditional real estate services, we facilitate land acquisition and development opportunities, as well as vehicle buying and selling services. This provides our clients with flexible investment options beyond standard property transactions.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve clients in Kabul and surrounding areas, including Qala-E-Fathullah and other prominent neighborhoods. Our deep local knowledge and established network allow us to provide exceptional service throughout the greater Kabul region.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "Scheduling a consultation is easy. You can call us directly at +93 78000 5396, email us at barekzayrealestate@gmail.com, or use the contact form on our website. We typically respond within 30-60 minutes during business hours and will arrange a convenient time to discuss your real estate needs.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
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
                Common Questions
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Frequently Asked <span className="gold-text">Questions</span>
            </motion.h2>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border hover:border-gold/50 rounded-xl px-6 transition-all duration-300 data-[state=open]:border-gold/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold py-6 [&[data-state=open]]:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
