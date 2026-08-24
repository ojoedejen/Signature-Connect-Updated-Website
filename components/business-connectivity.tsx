"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Cable, Satellite, RadioTower, ArrowRightLeft, Infinity as InfinityIcon, Smartphone } from 'lucide-react'

const linkTypes = [
  {
    icon: Cable,
    title: 'Fiber',
    description:
      'Symmetrical, high-capacity fiber for office spaces and commercial establishments in serviced areas.',
    color: 'bg-[#7454EC]',
  },
  {
    icon: Satellite,
    title: 'Starlink',
    description:
      'Satellite connectivity that reaches sites anywhere in the country, including remote operations.',
    color: 'bg-[#FFB547]',
  },
  {
    icon: RadioTower,
    title: 'PMP',
    description:
      'Point-to-Multipoint wireless links deployed quickly where running fiber is not practical.',
    color: 'bg-[#10b981]',
  },
]

const corporateFeatures = [
  {
    icon: InfinityIcon,
    title: 'Unlimited data plans',
    description:
      'No caps and no throttling for banks, mining companies, and corporate clients running data-heavy operations.',
  },
  {
    icon: Smartphone,
    title: 'Convenient online payments',
    description:
      'Settle invoices via Orange Money and Afrimoney by dialling *715*901# from your mobile.',
  },
]

export default function BusinessConnectivity() {
  return (
    <section className="section bg-[#f8f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Heading */}
        <div className="text-center section-head">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-6">
            Built for <span className="accent-text-light">Business</span>
          </h2>
          <p className="text-[#6d6888] text-lg sm:text-xl max-w-3xl mx-auto font-sans">
            For businesses and office spaces, we offer fiber, Starlink, and PMP connections &mdash; so your
            organisation is never dependent on a single link.
          </p>
        </div>

        {/* Link types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {linkTypes.map((link) => {
            const Icon = link.icon
            return (
              <div
                key={link.title}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-[#e8e5f5] transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 ${link.color}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f0d1e] mb-4">
                  {link.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-[#6d6888] font-sans">
                  {link.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Primary + backup */}
        <div className="bg-[#0f0d1e] rounded-2xl p-10 sm:p-14 lg:p-16 mb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-[#FFB547] flex items-center justify-center mb-8">
                <ArrowRightLeft className="w-8 h-8 text-[#0f0d1e]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                Primary link, plus a backup
              </h3>
              <p className="text-[#bdb8d8] text-lg leading-relaxed font-sans">
                You can set one connection as the primary link and the other as a backup, ensuring
                uninterrupted service at all times. If the primary path goes down, traffic continues over
                the secondary link.
              </p>
            </div>
            <div className="grid gap-5">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="text-xs font-bold font-serif uppercase tracking-wider text-[#FFB547] mb-2">
                  Primary
                </div>
                <div className="text-white font-sans text-lg">Fiber &mdash; your everyday high-capacity link</div>
              </div>
              <div className="flex justify-center">
                <ArrowRightLeft className="w-6 h-6 text-[#bdb8d8] rotate-90" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="text-xs font-bold font-serif uppercase tracking-wider text-[#FFB547] mb-2">
                  Backup
                </div>
                <div className="text-white font-sans text-lg">Starlink or PMP &mdash; automatic failover</div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate clients */}
        <div className="bg-white rounded-2xl p-10 sm:p-14 lg:p-16 border border-[#e8e5f5]">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#0f0d1e] mb-4">
              For banks, mining companies &amp; corporate clients
            </h3>
            <p className="text-[#6d6888] text-lg max-w-2xl mx-auto font-sans">
              Enterprise connectivity backed by unlimited data and payment options that fit local operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
            {corporateFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-[#f8f7ff] rounded-xl p-8 border border-[#e8e5f5]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#7454EC] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#0f0d1e] mb-3">{feature.title}</h4>
                  <p className="text-[#6d6888] font-sans leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* USSD callout */}
          <div className="bg-[#f0eefb] rounded-xl p-8 text-center border border-[#e8e5f5] mb-10">
            <div className="text-sm font-semibold font-sans text-[#6d6888] mb-3">
              Pay online with Orange Money or Afrimoney
            </div>
            <a
              href="tel:*715*901%23"
              className="inline-flex items-center justify-center min-h-[44px] text-4xl sm:text-5xl font-bold font-serif text-[#7454EC] tracking-wide hover:underline"
            >
              *715*901#
            </a>
          </div>

          <div className="text-center">
            <Button asChild className="btn-signature-primary px-10 py-4 text-lg font-serif font-bold rounded-xl">
              <Link href="/business">Explore Business Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
