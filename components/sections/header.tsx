"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Sun, Moon, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-gold/20"
          : "bg-background/60 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Logo%20%281%29-qoTWO1CVLOczpO9HdzR9AM1kByUzY3.png"
              alt="Barekzay Real Estate"
              width={60}
              height={60}
              className="rounded-full"
              loading="eager"
            />
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-bold text-foreground">
                BAREKZAY
              </p>
              <p className="text-xs tracking-[0.2em] text-gold">
                REAL ESTATE
              </p>
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">

            {/* THEME TOGGLE */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground hover:bg-muted transition"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            {/* ✅ FIXED CALL BUTTON (NO NESTED <a>) */}
            <Button
              asChild
              variant="outline"
              className="
    hidden md:flex items-center gap-2

    border-gold/50 
    text-foreground

    hover:bg-gold
    hover:border-gold

  hover:text-white
dark:hover:text-white

    [&_svg]:text-current

    transition-all duration-300
  "
            >
              <a href="tel:+93780005396">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>

            {/* CTA */}
            <Link href="#contact" className="hidden md:block">
              <Button className="bg-gold hover:bg-yellow-500 text-black transition">
                <MessageSquare className="h-4 w-4 mr-2" />
                Get Consultation
              </Button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-gold/20"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-gold py-2 border-b"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                {/* ✅ FIXED MOBILE CALL */}
                <a href="tel:+93780005396">
                  <Button
                    variant="outline"
                    className="w-full border-gold/50 hover:bg-gold hover:text-black"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +93 78000 5396
                  </Button>
                </a>

                <Link href="#contact">
                  <Button className="w-full bg-gold hover:bg-yellow-500 text-black">
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
