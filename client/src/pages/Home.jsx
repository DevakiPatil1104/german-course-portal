import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import { Button, Card } from '../components/common'
import { homeData } from '../data/home'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="German language classes for school students, beginners and Goethe exam aspirants."
      />

      <div className="container mx-auto px-4 py-15">

        {/* HERO */}
        <section className="grid items-center gap-10 md:grid-cols-2">
          <div className="md:pl-10 lg:pl-16">
            <h1 className="text-4xl font-extrabold text-ink md:text-6xl">
              Deutsch lernen.
              <br />
              Schritt für Schritt.
            </h1>

            <p className="mt-6 text-xl text-ink-soft">
              German for school students & beginners.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-ink-soft">
              Structured online lessons that build confidence in reading,
              writing, speaking and exam preparation through clear,
              easy-to-follow teaching.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/courses">
                <Button variant="sky">
                  Explore Courses
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="secondary">
                  Contact Tutor
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/home.png"
              alt="German Flag"
              className="w-full max-w-sm rounded-3xl shadow-xl"
            />
          </div>
        </section>

        {/* COURSES */}
        <section className="mt-15">
          <PageHeader
            accent="sunny"
            title="Courses Offered"
            description="Choose a course based on your level and learning goals."
          />

          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeData.courses.map((course) => (
              <Card key={course.title} tint={course.tint}>
                <div className="flex h-full flex-col">
                  <h3 className="text-xl font-bold text-ink">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-md leading-6 text-ink-soft">
                    {course.description}
                  </p>

                  <Link
                    to="/courses"
                    className="mt-auto pt-6 font-semibold text-ink transition-all duration-300 hover:translate-x-1"
                  >
                    Learn More →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <PageHeader
            accent="lavender"
            title="Why Learn German?"
            description="More than a language — German opens doors to education, careers and culture."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            <div className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm">
              <img
                src="/images/opportunities.png"
                alt="Global Opportunities"
                className="h-30 w-35 rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-ink">
                  Global Opportunities
                </h3>

                <p className="mt-2 text-ink-soft leading-7">
                  German helps you connect with people, cultures and opportunities across Europe and beyond.
                </p>
              </div>
            </div>

            <div className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm">
              <img
                src="/images/education.png"
                alt="Higher Education"
                className="h-30 w-50 rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-ink">
                  Higher Education
                </h3>

                <p className="mt-2 text-ink-soft leading-7">
                  Germany is home to world-renowned universities and excellent academic opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm">
              <img
                src="/images/career.png"
                alt="Career Growth"
                className="h-30 w-35 rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-ink">
                  Career Growth
                </h3>

                <p className="mt-2 text-ink-soft leading-7">
                  German can strengthen your profile in engineering, technology, research and business.
                </p>
              </div>
            </div>

            <div className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm">
              <img
                src="/images/culture.png"
                alt="Cultural Exploration"
                className="h-30 w-35 rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-ink">
                  Cultural Exploration
                </h3>

                <p className="mt-2 text-ink-soft leading-7">
                  Discover literature, films, traditions and the rich culture of German-speaking countries.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <PageHeader
            accent="sky"
            title="Everything Included"
            description="Designed to make learning German simple, structured and enjoyable."
          />

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">

            {[
              'Live Online Classes',
              'Speaking Practice',
              'Progress Tracking',
              'Structured Notes',
              'Mock Papers',
              'Study Material',
              'Regular Revision',
              'Small Batches',
              'Beginner Friendly',
              'Interactive Learning',
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-3
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <span className="font-medium text-ink">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </section>
      </div>
    </>
  )
}

export default Home

