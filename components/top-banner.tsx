"use client"

import { Phone } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-[#FFB547] text-[#0f0d1e] py-2 sm:py-3 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold font-serif uppercase tracking-wider">
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Call +232 72568290 &nbsp;|&nbsp; WhatsApp inquiries only: +232 7634 0991</span>
          </div>
        </div>
      </div>
    </div>
  )
}
