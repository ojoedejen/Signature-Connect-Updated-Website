"use client"

import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="premium-surface text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/93ce435ab_Artboard115x.png"
              alt="Signature Connect Logo"
              className="h-20 sm:h-32 w-auto mx-auto md:mx-0 mb-6"
            />
            <p className="text-[#bdb8d8] mb-8 font-sans leading-relaxed text-sm">
              Signature Connect Internet Service Provider delivers high-speed internet access to homes, offices, and commercial establishments through Fiber, Starlink, and PMP, with nationwide coverage.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/signatureconnectsl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-[#FFB547] hover:text-[#0f0d1e] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-[#FFB547] hover:text-[#0f0d1e] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-[#FFB547] hover:text-[#0f0d1e] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-[#FFB547] hover:text-[#0f0d1e] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-bold font-serif mb-8 accent-text">Our Services</h4>
              <ul className="space-y-4 text-[#bdb8d8] font-sans text-sm">
                {['Fiber Internet', 'Starlink Internet', 'PMP Connectivity', 'In-Home WiFi', 'Business Solutions'].map((s) => (
                  <li key={s}>
                    <a href="#" className="inline-flex items-center min-h-[44px] hover:text-[#FFB547] transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif mb-8 accent-text">Customer Support</h4>
              <ul className="space-y-4 text-[#bdb8d8] font-sans text-sm">
                {['24/7 Support', 'Technical NOC', 'Billing Support', 'Installation Guide', 'Customer Portal'].map((s) => (
                  <li key={s}>
                    <a href="#" className="inline-flex items-center min-h-[44px] hover:text-[#FFB547] transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left lg:col-span-1">
            <h4 className="text-lg font-bold font-serif mb-8 accent-text">Contact Us</h4>
            <div className="space-y-5 text-[#bdb8d8] font-sans text-sm">
              <a
                href="tel:+23272568290"
                className="flex items-center justify-center md:justify-start glass-card p-4 rounded-xl gap-3 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#9370ff]" />
                <span>+232 72568290</span>
              </a>
              <a
                href="https://wa.me/23276340991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-center md:justify-start glass-card p-4 rounded-xl gap-3 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mt-0.5 text-[#9370ff]" />
                <span className="text-xs">
                  +232 7634 0991
                  <br />
                  <span className="text-[#bdb8d8]">WhatsApp &mdash; inquiries only</span>
                </span>
              </a>
              <a
                href="mailto:info@signature-connect.com"
                className="flex items-center justify-center md:justify-start glass-card p-4 rounded-xl gap-3 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#9370ff]" />
                <span className="break-all text-xs">info@signature-connect.com</span>
              </a>
              <div className="flex items-start justify-center md:justify-start glass-card p-4 rounded-xl gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[#9370ff]" />
                <span className="text-xs">
                  92 Regent Road, Hill Station
                  <br />
                  Freetown, Sierra Leone
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 sm:mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#bdb8d8] text-xs font-sans text-center md:text-left">
            &copy; 2025 Signature Connect. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#bdb8d8] font-sans">
            <a href="#" className="inline-flex items-center min-h-[44px] hover:text-[#FFB547]">Terms of Service</a>
            <a href="#" className="inline-flex items-center min-h-[44px] hover:text-[#FFB547]">Privacy Policy</a>
            <a href="#" className="inline-flex items-center min-h-[44px] hover:text-[#FFB547]">Fair Usage Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
