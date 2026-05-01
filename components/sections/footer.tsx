"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#properties", label: "Properties" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const serviceLinks = [
  { href: "#services", label: "Buying Services" },
  { href: "#services", label: "Selling Services" },
  { href: "#services", label: "Rental Services" },
  { href: "#services", label: "Investment Consulting" },
  { href: "#services", label: "Land Deals" },
  { href: "#services", label: "Vehicle Deals" },
  { href: "#services", label: "Property Valuation" },
]

const serviceAreas = [
  "Kabul",
  "Qala-E-Fathullah",
  "Surrounding Kabul Areas",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Logo%20%281%29-qoTWO1CVLOczpO9HdzR9AM1kByUzY3.png"
                alt="Barekzay Real Estate"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-serif text-lg font-bold text-foreground">BAREKZAY</p>
                <p className="text-xs tracking-[0.2em] text-gold">REAL ESTATE</p>
              </div>
            </Link>
            <p className="text-gold text-sm font-medium mb-4">
              Buy. Sell. Invest. Succeed.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Trusted real estate guidance for buying, selling, renting, and investing in Kabul and surrounding areas.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  First Street of Qala-E-Fathullah, Kabul, Afghanistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>+93 78000 5396</p>
                  <p>+93 785 517210</p>
                  <p>+93 777 284420</p>
                  <p>+1 540-836-3323</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  barekzayrealestate@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Mon–Fri: 9:00am–5:00pm
                </span>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-foreground mb-3">Service Areas</h5>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold/10 rounded-full text-xs text-gold"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Barekzay Real Estate. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
