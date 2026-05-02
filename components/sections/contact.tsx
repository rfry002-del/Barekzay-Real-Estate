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
  AlertCircle,
  Loader2,
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
    value: "Mon-Fri: 9:00am-5:00pm",
  },
]

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  contactMethod: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  service?: string
  general?: string
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    contactMethod: "",
    message: "",
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = "Please provide a valid phone number"
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }))
    }
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors({})
    
    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.errors && Array.isArray(result.errors)) {
          setErrors({ general: result.errors.join(", ") })
        } else {
          setErrors({ general: result.error || "Failed to send message. Please try again." })
        }
        return
      }

      // Success
      setIsSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        contactMethod: "",
        message: "",
      })
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setErrors({})
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
              {"Let's Move Forward"} <span className="gold-text">With Confidence</span>
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
                {"Tell us what you need and we'll get back to you quickly with professional guidance - no pressure."}
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
                  <span className="font-semibold text-gold">Quick Response:</span> We typically respond within 30-60 minutes
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
                    <p className="text-muted-foreground mb-6">
                      {"Thank you for reaching out. We'll get back to you shortly."}
                    </p>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-gold/50 text-foreground hover:bg-gold hover:text-black"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* General Error Message */}
                    {errors.general && (
                      <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errors.general}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`bg-background border-border focus:border-gold ${
                          errors.name ? "border-destructive" : ""
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+93 XXX XXX XXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`bg-background border-border focus:border-gold ${
                            errors.phone ? "border-destructive" : ""
                          }`}
                          disabled={isSubmitting}
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm">{errors.phone}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`bg-background border-border focus:border-gold ${
                            errors.email ? "border-destructive" : ""
                          }`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Service & Contact Method */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Service Needed *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger
                            className={`bg-background border-border focus:border-gold ${
                              errors.service ? "border-destructive" : ""
                            }`}
                          >
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
                        {errors.service && (
                          <p className="text-destructive text-sm">{errors.service}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Contact Method</Label>
                        <Select
                          value={formData.contactMethod}
                          onValueChange={(value) => handleSelectChange("contactMethod", value)}
                          disabled={isSubmitting}
                        >
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
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-gold resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-dark text-black py-6 text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Sending...
                        </>
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
