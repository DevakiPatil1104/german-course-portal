import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'

function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about the tutor's qualifications, experience, and teaching philosophy."
      />
      <div className="container mx-auto space-y-10 px-4 py-10">
        <PageHeader
          accent="lavender"
          title="Meet Your German Tutor"
          description="Learn about the experience, qualifications, and teaching approach behind every lesson."
        />

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Left Side - Photo */}
            <div className="flex justify-center">
              <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  src="/images/tutor.jpg"
                  alt="German Tutor"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Details */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-ink">
                About the Tutor
              </h2>

              <p className="text-lg leading-8 text-ink-soft">
                <span className="font-semibold text-ink">
                  Guten Tag! I'm Srushti,
                </span>{' '}
                a Goethe B1 certified German tutor and former SSC Board German
                topper at my school. I have been learning German for over 7 years
                and have teaching experience of 1 year.
              </p>

              <p className="mt-5 text-lg leading-8 text-ink-soft">
                I am passionate about teaching German and exploring European
                culture. I specialize in helping beginners build strong foundations
                with structured, easy-to-understand lessons.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-slate-200" />

          {/* Teaching Style */}
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-5 text-2xl font-bold text-ink">
              Teaching Approach
            </h3>

            <p className="text-lg leading-8 text-ink-soft">
              My teaching style is interactive, structured, and student-focused.
              Lessons are taught step-by-step with notes, mock papers, and study
              materials provided.
            </p>

            <p className="mt-4 text-lg leading-8 text-ink-soft">
              Regular conversation practice and progress tracking help improve weak
              areas and build confidence in German.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
