import { useState } from 'react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import { faqCards } from '../data/faq'

function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to common questions about German courses, class timings, and Goethe exam preparation."
      />

      <div className="container mx-auto space-y-10 px-4 py-10">
        <PageHeader
          accent="mint"
          title="Frequently Asked Questions"
          description="Find quick answers about courses, batches, schedules, study materials and exam preparation."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {faqCards.map((item, index) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 ${
                index % 2 === 0
                  ? 'border-sky-200 bg-sky-50'
                  : 'border-amber-200 bg-amber-50'
              }`}
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div>
                  <span className="mb-2 block text-sm font-semibold tracking-wider text-ink-soft">
                    FAQ {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-lg font-bold text-ink sm:text-xl">
                    {item.question}
                  </h3>
                </div>

                <span className="ml-4 text-3xl font-light text-ink">
                  {openId === item.id ? '−' : '+'}
                </span>
              </button>

              {openId === item.id && (
                <div className="border-t border-black/10 px-6 py-5">
                  <p className="leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FAQ