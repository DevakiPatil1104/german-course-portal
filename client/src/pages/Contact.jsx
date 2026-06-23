import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import { Button, Card } from '../components/common'
import { CONTACT, WHATSAPP_LINK } from '../utils/constants'

function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch for German language classes via phone, email, or WhatsApp."
      />
      <div className="container mx-auto space-y-19 px-4 py-16 lg:py-10">
        <PageHeader
          accent="coral"
          title="Get in Touch"
          description="Questions about courses, schedules, fees, or where to begin? We'd be happy to help."
        />

        {/* Contact Methods */}
        <div className="grid gap-5 md:grid-cols-3">
          <Card tint="coral">
            <h3 className="font-bold text-ink">Phone</h3>
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-2 block text-ink-soft hover:text-ink"
            >
              {CONTACT.phone}
            </a>
          </Card>

          <Card tint="sky">
            <h3 className="font-bold text-ink">Email</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 block text-ink-soft hover:text-ink break-all"
            >
              {CONTACT.email}
            </a>
          </Card>

          <Card tint="mint">
            <h3 className="font-bold text-ink">WhatsApp</h3>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-ink-soft hover:text-ink"
            >
              Start a conversation
            </a>
          </Card>
          </div>

        {/* How Can We Help */}
        <section className="space-y-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ink">How Can We Help?</h2>
            <p className="mt-2 text-ink-soft">
              Reach out if you need guidance on choosing the right course or have
              questions about learning German with us.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card tint="coral">
              <h3 className="font-bold text-ink">Course Information</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Learn about available levels, course structure, and what you'll study.
              </p>
            </Card>

            <Card tint="sky">
              <h3 className="font-bold text-ink">Batch Timings</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Find schedules that fit your routine and learning goals.
              </p>
            </Card>

            <Card tint="sunny">
              <h3 className="font-bold text-ink">Fee Details</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Get information about course fees and available learning options.
              </p>
            </Card>

            <Card tint="mint">
              <h3 className="font-bold text-ink">Learning Guidance</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Not sure where to begin? We'll help you choose the right starting point.
              </p>
            </Card>
          </div>
        </section>
        

        {/* WhatsApp CTA */}
        <Card tint="sky">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ink">
              Ready to Get Started?
            </h2>

            <p className="mt-3 text-ink-soft">
              Send us a message on WhatsApp and we'll help you with the next steps.
            </p>

            <div className="mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="sky">Chat on WhatsApp</Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Contact
