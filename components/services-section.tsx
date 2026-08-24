"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Wifi, Home, RadioTower, Building2, Satellite, ShieldCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'Fiber Internet',
    description: 'High-speed fiber connectivity for homes, offices, and commercial establishments, with symmetrical speeds and unlimited monthly data.',
    featured: true,
    color: 'bg-[#7454EC]',
    route: '/plans',
  },
  {
    icon: Home,
    title: 'In-Home WiFi',
    description: 'Complete home coverage with advanced mesh WiFi, eliminating dead zones. Available on prepaid or postpaid monthly plans.',
    featured: false,
    color: 'bg-[#10b981]',
    route: '/plans',
  },
  {
    icon: RadioTower,
    title: 'PMP Connectivity',
    description: 'Point-to-Multipoint wireless links that reach offices and commercial sites quickly, where trenching fiber is not practical.',
    featured: false,
    color: 'bg-[#9370ff]',
    route: '/business',
  },
  {
    icon: Building2,
    title: 'Business Solutions',
    description: 'Fiber, Starlink, and PMP for business. Run one as your primary link and another as backup for uninterrupted service.',
    featured: false,
    color: 'bg-[#f43f5e]',
    route: '/business',
  },
  {
    icon: Satellite,
    title: 'Starlink Internet',
    description: 'Satellite-powered connectivity reaching the most remote sites nationwide, ideal as a primary link or a resilient backup.',
    featured: false,
    color: 'bg-[#FFB547]',
    route: '/plans',
  },
  {
    icon: ShieldCheck,
    title: 'VPN & IP Protection',
    description: 'Secure your connection with static IPs and VPN services for enhanced privacy and security.',
    featured: false,
    color: 'bg-[#38bdf8]',
    route: '/support',
  },
]

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center section-head">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-6">
            Our <span className="accent-text-light">Services</span>
          </h2>
          <p className="text-[#6d6888] text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            High-speed internet access for homes, offices, and commercial establishments &mdash; delivered over Fiber, Starlink, and PMP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 ${
                  service.featured
                    ? 'bg-[#0f0d1e] text-white'
                    : 'bg-[#f8f7ff] hover:bg-white border border-[#e8e5f5]'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 ${service.color}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold font-serif mb-4 ${
                    service.featured ? 'text-white' : 'text-[#0f0d1e]'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-base sm:text-lg leading-relaxed mb-8 font-sans ${
                    service.featured ? 'text-[#bdb8d8]' : 'text-[#6d6888]'
                  }`}
                >
                  {service.description}
                </p>
                <Button
                  asChild
                  variant={service.featured ? 'default' : 'outline'}
                  className={`group min-h-[44px] ${
                    service.featured
                      ? 'btn-signature-primary'
                      : 'border-[#e8e5f5] text-[#6d6888] hover:bg-[#f0eefb]'
                  }`}
                >
                  <Link href={service.route}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
