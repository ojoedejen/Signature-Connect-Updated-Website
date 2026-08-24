import Link from 'next/link'
import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServicesSection from '@/components/services-section'
import { Button } from '@/components/ui/button'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-20 sm:py-24 lg:py-28 flex items-center relative z-0 premium-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-3xl mx-auto font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            Our Internet <span className="accent-text">Services</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] mb-12 font-sans">
            Comprehensive internet solutions for homes, businesses, and institutions across Sierra Leone.
          </p>
          <Button asChild className="btn-signature-primary px-10 py-4 text-lg font-serif font-bold rounded-xl">
            <Link href="/plans">View Our Plans</Link>
          </Button>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  )
}
