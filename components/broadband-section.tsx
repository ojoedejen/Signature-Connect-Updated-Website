"use client"

import { Check } from 'lucide-react'

const features = [
  'Competitive pricing',
  'Monthly subscription plans',
  'One-time installation fee',
  'Prepaid and postpaid options',
  'Nationwide coverage across the country',
]

const cards = [
  { label: 'Starting from', value: 'NLe 700', subtext: 'per month' },
  { label: 'Average', value: 'NLe 1,250', subtext: 'most popular' },
  { label: 'Satisfaction', value: '98.5%', subtext: 'happy customers' },
]

export default function BroadbandSection() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left - stat cards. Stacked and readable on small screens; only
              floated into the scattered arrangement once there is room for it. */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-5 lg:block lg:h-[550px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 lg:p-8 border-2 border-[#e8e5f5] hover:border-[#FFB547] transition-colors duration-300 lg:absolute ${
                  index === 0
                    ? 'lg:top-0 lg:left-0'
                    : index === 1
                    ? 'lg:top-1/3 lg:right-0'
                    : 'lg:bottom-0 lg:left-1/4'
                }`}
                style={{
                  animation: `float ${3 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className="text-sm text-[#6d6888] font-sans">{card.label}</div>
                <div className="text-3xl lg:text-5xl font-bold text-[#7454EC] font-serif">{card.value}</div>
                <div className="text-xs text-[#6d6888] font-sans">{card.subtext}</div>
              </div>
            ))}

            {/* Background decoration, only where the cards actually float */}
            <div className="hidden lg:block absolute inset-0 bg-[#f0eefb] rounded-3xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-8">
              Our <span className="accent-text-light">Offerings</span>
            </h2>
            <p className="text-[#6d6888] text-lg sm:text-xl leading-relaxed mb-12 font-sans">
              Straightforward plans built around how you actually pay and where you actually are. Choose the billing model that suits you, pay the installation fee once, and stay connected anywhere in the country.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#FFB547] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-[#0f0d1e]" />
                  </div>
                  <span className="text-[#342f50] font-medium font-sans text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        /* Below the floated layout the cards are in normal flow, so drifting
           them vertically would just break the grid rhythm. */
        @media (max-width: 1023px) {
          [style*='float'] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
