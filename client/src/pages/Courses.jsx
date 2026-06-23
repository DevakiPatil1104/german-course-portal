import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import { Card, Button } from '../components/common'
import { Link } from 'react-router-dom'

function Courses() {
  return (
    <>
      <SEO
        title="Courses"
        description="Explore German language courses for school students, high school students, and Goethe exam preparation."
      />

      <div className="container mx-auto space-y-16 px-4 py-16 lg:py-10">
        <PageHeader
          accent="sky"
          title="German Language Courses"
          description="Whether you're preparing for school exams, international certifications, or starting your German journey from scratch, our courses provide structured learning and steady progress."
        />

        {/* Quick Highlights */}
        <section className="flex flex-wrap justify-center gap-5">
          <span className="rounded-full bg-coral/15 px-5 py-3 font-semibold text-ink">
            4 Core Courses
          </span>

          <span className="rounded-full bg-sky/15 px-5 py-3 font-semibold text-ink">
            Goethe A1–A2
          </span>

          <span className="rounded-full bg-sunny/15 px-5 py-3 font-semibold text-ink">
            Weekend Batches
          </span>

          <span className="rounded-full bg-lavender/15 px-5 py-3 font-semibold text-ink">
            One-on-One Tutoring
          </span>

          <span className="rounded-full bg-mint/15 px-5 py-3 font-semibold text-ink">
            Personal Guidance
          </span>
        </section>

        {/* Main Courses */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-ink">
              Explore Our Courses
            </h2>
            <p className="mt-3 text-ink-soft">
              Choose the learning path that matches your goals.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* School German */}
            <Card tint="coral">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-coral">
                Classes 8–10
              </span>

              <h3 className="mt-4 text-2xl font-bold text-ink">
                School German
              </h3>

              <div className="mt-5">
                <p className="font-semibold text-ink">For</p>
                <p className="text-ink-soft">
                  Students learning German as a school subject.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-ink">What You'll Learn</p>

                <ul className="mt-3 space-y-2 text-ink-soft">
                  <li>• Vocabulary development</li>
                  <li>• Grammar foundations</li>
                  <li>• Reading and writing skills</li>
                  <li>• Listening and speaking practice</li>
                  <li>• School syllabus support</li>
                  <li>• Exam preparation and confidence building</li>
                </ul>
              </div>

              <p className="mt-6 font-semibold text-ink">
                2 lectures per week
              </p>
            </Card>

            {/* High School German */}
            <Card tint="sky">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky">
                Classes 11–12
              </span>

              <h3 className="mt-4 text-2xl font-bold text-ink">
                High School German
              </h3>

              <div className="mt-5">
                <p className="font-semibold text-ink">For</p>
                <p className="text-ink-soft">
                  Senior secondary students studying German.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-ink">What You'll Learn</p>

                <ul className="mt-3 space-y-2 text-ink-soft">
                  <li>• Grammar refinement</li>
                  <li>• Reading comprehension</li>
                  <li>• Writing formats</li>
                  <li>• Speaking practice</li>
                  <li>• Regular revision</li>
                  <li>• Exam-oriented preparation</li>
                </ul>
              </div>

              <p className="mt-6 font-semibold text-ink">
                2 lectures per week
              </p>
            </Card>

            {/* A1 */}
            <Card tint="sunny">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-600">
                Goethe A1
              </span>

              <h3 className="mt-4 text-2xl font-bold text-ink">
                German Beginner (A1)
              </h3>

              <div className="mt-5">
                <p className="font-semibold text-ink">For</p>
                <p className="text-ink-soft">
                  Complete beginners in German.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-ink">What You'll Learn</p>

                <ul className="mt-3 space-y-2 text-ink-soft">
                  <li>• Introductions and greetings</li>
                  <li>• Daily conversations</li>
                  <li>• Numbers and time</li>
                  <li>• Shopping and travel situations</li>
                  <li>• Basic reading and writing</li>
                  <li>• Listening and speaking practice</li>
                </ul>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-ink">Skills Covered</p>
                <p className="text-ink-soft">
                  Lesen • Hören • Schreiben • Sprechen
                </p>
              </div>

              <p className="mt-6 font-semibold text-ink">
                4 lectures per week
              </p>
            </Card>

            {/* A2 */}
            <Card tint="lavender">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-purple-600">
                Goethe A2
              </span>

              <h3 className="mt-4 text-2xl font-bold text-ink">
                Goethe Elementary (A2)
              </h3>

              <div className="mt-5">
                <p className="font-semibold text-ink">For</p>
                <p className="text-ink-soft">
                  Learners with prior A1 knowledge.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-ink">What You'll Learn</p>

                <ul className="mt-3 space-y-2 text-ink-soft">
                  <li>• More natural communication</li>
                  <li>• Describing experiences</li>
                  <li>• Expressing opinions</li>
                  <li>• Everyday situations</li>
                  <li>• Stronger grammar foundations</li>
                  <li>• Goethe exam preparation</li>
                </ul>
              </div>

              <div className="mt-5">
                <p className="font-semibold text-ink">Skills Covered</p>
                <p className="text-ink-soft">
                  Lesen • Hören • Schreiben • Sprechen
                </p>
              </div>

              <p className="mt-6 font-semibold text-ink">
                4 lectures per week
              </p>
            </Card>
          </div>
        </section>

        <Card tint="mint">
          <h2 className="text-3xl font-bold text-ink">
            What You Get Beyond the Course
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-ink">
                Weekend Learning Options
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Flexible schedules designed for students and working learners.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-ink">
                One-on-One Tutoring
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Additional personalized support whenever required.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-ink">
                Personal Guidance
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Help choosing the right course and learning path.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-ink">
                Test Preparation Support
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Practice-oriented approach to build confidence for exams.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card tint="sky">
          <div className="py-4 text-center">
            <h2 className="text-3xl font-bold text-ink">
              Not Sure Which Course Is Right For You?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              Whether you're a school student, preparing for Goethe exams, or
              beginning your German journey, we're happy to help you choose the
              right course.
            </p>

            <div className="mt-8">
              <Link to="/contact">
                <Button variant="sky">Contact Us</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Courses