import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cable, Satellite, RadioTower, ArrowRightLeft, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Cable,
    title: 'Fiber',
    description:
      'Symmetrical, high-capacity fiber for office spaces and commercial establishments in serviced areas, with unlimited monthly data.',
  },
  {
    icon: Satellite,
    title: 'Starlink',
    description:
      'Satellite connectivity that reaches sites anywhere in the country, including remote mining and field operations.',
  },
  {
    icon: RadioTower,
    title: 'PMP',
    description:
      'Point-to-Multipoint wireless links deployed quickly where running fiber to the premises is not practical.',
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-20 sm:py-24 lg:py-28 flex items-center relative z-0 premium-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-3xl mx-auto font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            Connectivity That <span className="accent-text">Empowers Business</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] mb-12 font-sans">
            For businesses and office spaces, we offer fiber, Starlink, and PMP connections. Set one as the
            primary link and the other as a backup, ensuring uninterrupted service at all times.
          </p>
          <Button asChild className="btn-signature-primary px-10 py-4 text-lg font-serif font-bold rounded-xl">
            <a href="https://wa.me/23276340991" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 sm:py-32 min-h-screen flex items-center bg-white text-[#0f0d1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 text-[#0f0d1e]">
              Three Ways to Connect
            </h2>
            <p className="text-xl text-[#6d6888] max-w-3xl mx-auto font-sans leading-relaxed">
              Choose the technology that fits your site &mdash; or combine two of them for redundancy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="rounded-2xl border border-[#e8e5f5] hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#FFB547]/20">
                    <solution.icon className="w-8 h-8 text-[#FFB547]" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-serif text-[#0f0d1e]">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="mb-8 font-sans flex-grow text-[#6d6888]">{solution.description}</p>
                  <Button
                    variant="outline"
                    className="mt-auto rounded-lg w-fit min-h-[44px] border-[#e8e5f5] text-[#6d6888] hover:bg-[#f0eefb]"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Primary + Backup */}
      <section className="py-20 sm:py-28 bg-[#0f0d1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-[#FFB547] flex items-center justify-center mb-8">
                <ArrowRightLeft className="w-8 h-8 text-[#0f0d1e]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-6">
                Never offline
              </h2>
              <p className="text-[#bdb8d8] text-lg leading-relaxed font-sans mb-6">
                You can set one connection as the primary link and the other as a backup, ensuring
                uninterrupted service at all times.
              </p>
              <p className="text-[#bdb8d8] text-lg leading-relaxed font-sans">
                If your primary path is disrupted, traffic continues over the secondary link so your
                branch, office, or site keeps working.
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
      </section>

      {/* Corporate Clients */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0f0d1e] mb-6">
              Banks, Mining &amp; Corporate Clients
            </h2>
            <p className="text-xl text-[#6d6888] max-w-2xl mx-auto font-sans leading-relaxed">
              Dedicated connectivity for organisations that cannot afford downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f8f7ff] rounded-2xl p-10 border border-[#e8e5f5]">
              <h3 className="text-2xl font-bold font-serif text-[#0f0d1e] mb-4">Unlimited data plans</h3>
              <p className="text-[#6d6888] font-sans leading-relaxed">
                No caps and no throttling, for data-heavy operations across every branch and site.
              </p>
            </div>
            <div className="bg-[#f8f7ff] rounded-2xl p-10 border border-[#e8e5f5]">
              <h3 className="text-2xl font-bold font-serif text-[#0f0d1e] mb-4">Convenient online payments</h3>
              <p className="text-[#6d6888] font-sans leading-relaxed">
                Settle invoices via Orange and Afrimoney, straight from your mobile.
              </p>
            </div>
          </div>

          <div className="bg-[#f0eefb] rounded-2xl p-10 text-center border border-[#e8e5f5]">
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
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-center text-[#0f0d1e] mb-16">
            Why Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Dedicated Support' },
              { value: '10 Gbps', label: 'Max Speed' },
              { value: '48hrs', label: 'Installation' },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl border border-[#e8e5f5]">
                <div className="text-4xl font-bold accent-text-light font-serif mb-3">{item.value}</div>
                <div className="text-[#6d6888] font-sans">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
