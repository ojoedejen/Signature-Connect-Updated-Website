"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'Who do you provide internet access to?',
    answer:
      'Signature Connect Internet Service Provider delivers high-speed internet access to homes, offices, and commercial establishments. Residential customers can choose from our monthly plans, while businesses and office spaces can be connected over fiber, Starlink, or PMP.',
  },
  {
    question: 'Can I have a backup connection for my business?',
    answer:
      'Yes. For businesses and office spaces we offer fiber, Starlink, and PMP connections. You can set one as the primary link and the other as a backup, ensuring uninterrupted service at all times.',
  },
  {
    question: 'What do your offerings include?',
    answer:
      'Competitive pricing, monthly subscription plans, a one-time installation fee, prepaid and postpaid options, and nationwide coverage across the country.',
  },
  {
    question: 'What is the difference between prepaid and postpaid?',
    answer:
      'With prepaid you pay for your subscription up front and the service runs for that period. With postpaid you are billed at the end of the cycle for the service used. Both options are available on our monthly subscription plans.',
  },
  {
    question: 'Do you offer plans for banks, mining companies, and corporate clients?',
    answer:
      'Yes. Corporate clients, banks, and mining companies are served with unlimited data plans, along with convenient online payments via Orange and Afrimoney by dialling *715*901#.',
  },
  {
    question: 'How does the installation process work and what is the cost?',
    answer:
      'Installation is charged once as a one-time fee, which covers the router, cables, and full setup by our certified technicians. Your monthly subscription then runs separately from that one-time charge.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We provide nationwide coverage across the country via fiber, Starlink, and PMP. This includes urban centres, rural communities, and remote sites.',
  },
  {
    question: 'What are the payment options available?',
    answer:
      'You can pay online via Orange and Afrimoney by dialling *715*901#, through our Vultme payment portal, or by bank transfer to Rokel Commercial Bank. Visit our payment page for detailed instructions.',
  },
  {
    question: 'How do I get in touch?',
    answer:
      'Email info@signature-connect.com or call +232 72568290. For inquiries you can also reach us on WhatsApp at +232 7634 0991 (inquiries only).',
  },
]

export default function FaqSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center section-head">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-6">
            Frequently Asked <span className="accent-text-light">Questions</span>
          </h2>
          <p className="text-[#6d6888] text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Find answers to common questions about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-5">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#f8f7ff] rounded-xl border border-[#e8e5f5] px-8 data-[state=open]:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left text-lg sm:text-xl font-semibold font-serif text-[#0f0d1e] hover:text-[#7454EC] py-8 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6d6888] font-sans pb-8 leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
