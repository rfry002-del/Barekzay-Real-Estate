"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  Shield,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const trustPoints = [
  "20+ years of local experience",
  "Trusted Kabul market knowledge",
  "Transparent and professional service",
  "Buying, selling, renting, and investment support",
]

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "First Street of Qala-E-Fathullah, Kabul, Afghanistan",
  },
  {
    icon: Phone,
    label: "Phone",
    values: ["+93 78000 5396", "+93 785 517210", "+93 777 284420", "+1 540-836-3323"],
  },
  {
    icon: Mail,
    label: "Email",
    value: "barekzayrealestate@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri: 9:00am–5:00pm",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget

    const formData = {
      name: (form.name as any).value,
      email: (form.email as any).value,
      phone: (form.phone as any).value,
      message: (form.message as any).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        alert("Something went wrong")
      }
    } catch (error) {
      alert("Error sending message")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-background">
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
                Get In Touch
              </span>
              <div className="h-px w-12 bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground"
            >
              Let&apos;s Move Forward <span className="gold-text">With Confidence</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-muted-foreground mb-8">
                Tell us what you need and we&apos;ll get back to you quickly with professional guidance — no pressure.
              </p>

              {/* Trust Points */}
              <div className="space-y-4 mb-10">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="bg-gold/10 rounded-xl p-4 mb-10 border border-gold/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-gold">Quick Response:</span> We typically respond within 30–60 minutes
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.values ? (
                        <div className="space-y-1">
                          {info.values.map((val, i) => (
                            <p key={i} className="text-foreground font-medium">{val}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <Check className="w-10 h-10 text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+93 XXX XXX XXX"
                          required
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                    </div>

                    {/* Service & Contact Method */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Service Needed</Label>
                        <Select required>
                          <SelectTrigger className="bg-background border-border focus:border-gold">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buying">Buying</SelectItem>
                            <SelectItem value="selling">Selling</SelectItem>
                            <SelectItem value="renting">Renting</SelectItem>
                            <SelectItem value="investment">Investment Consulting</SelectItem>
                            <SelectItem value="land">Land Deal</SelectItem>
                            <SelectItem value="vehicle">Vehicle Deal</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Contact Method</Label>
                        <Select>
                          <SelectTrigger className="bg-background border-border focus:border-gold">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your real estate needs..."
                        rows={4}
                        className="bg-background border-border focus:border-gold resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-dark text-primary-foreground py-6 text-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Submit Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    {/* Security Note */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Your information is 100% secure. No spam.</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
