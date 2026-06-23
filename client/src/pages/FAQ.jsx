import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import { faqCards } from '../data/faq'

function FAQ() {
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqCards.map((item, index) => (
            <div
              key={item.id}
              className="group h-64 [perspective:1200px]"
            >
              <div
                className="
                  relative h-full w-full
                  transition-transform duration-1200
                  ease-in-out
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >
                {/* Front */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl p-6
                    shadow-md border border-white/20
                    [backface-visibility:hidden]
                    ${
                      index % 2 === 0
                        ? 'bg-sky-50'
                        : 'bg-amber-50'
                    }
                  `}
                >
                  <div className="flex h-full flex-col justify-center">
                    <span className="mb-4 text-sm font-semibold tracking-wider text-ink-soft">
                      FAQ {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-xl font-bold leading-relaxed text-ink">
                      {item.question}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl p-6
                    shadow-lg border border-white/20
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                    ${
                      index % 2 === 0
                        ? 'bg-sky-100'
                        : 'bg-amber-100'
                    }
                  `}
                >
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-xl leading-relaxed text-ink">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FAQ
