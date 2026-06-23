import { useState } from 'react'

function CourseFinder() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [profile, setProfile] = useState('')
  const [selectedProfile, setSelectedProfile] = useState('')
  const [experience, setExperience] = useState('')
  const [selectedExperience, setSelectedExperience] = useState('')

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-50 rounded-full bg-coral px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        Find Your Course
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-40 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] rounded-3xl border border-peach bg-white p-5 shadow-xl">
          <h3 className="text-lg font-bold text-ink">
            Course Finder
          </h3>

          <div className="mt-4">
            <div className="max-w-[85%] rounded-2xl bg-sky/10 p-3 text-sm text-ink">
                Hi! I'll help you find the right German course.
            </div>
          </div>
 
        {step === 1 && (
        <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-ink">
            Which describes you best?
            </p>

            <button
            onClick={() => {
                setProfile('school')
                setSelectedProfile('Classes 8–10')
                setStep(2)
            }}
            className="block w-full rounded-xl border p-2 text-left hover:bg-coral/10"
            >
            Classes 8–10
            </button>

            <button
            onClick={() => {
                setProfile('highschool')
                setSelectedProfile('Classes 11–12')
                setStep(2)
            }}
            className="block w-full rounded-xl border p-2 text-left hover:bg-coral/10"
            >
            Classes 11–12
            </button>

            <button
            onClick={() => {
                setProfile('adult')
                setSelectedProfile('College / Working Professional')
                setStep(2)
            }}
            className="block w-full rounded-xl border p-2 text-left hover:bg-coral/10"
            >
            College / Working Professional
            </button>
        </div>
        )}

        {selectedProfile && (
        <div className="mt-3 flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-coral px-3 py-2 text-sm text-white">
            {selectedProfile}
            </div>
        </div>
        )}

        {step === 2 && (
        <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-ink">
            Have you learned German before?
            </p>

            <button
            onClick={() => {
                setExperience('none')
                setSelectedExperience('No, never')
                setStep(3)
            }}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sky/10"
            >
            No, never
            </button>

            <button
            onClick={() => {
                setExperience('some')
                setSelectedExperience('A little')
                setStep(3)
            }}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sky/10"
            >
            A little
            </button>

            <button
            onClick={() => {
                setExperience('a1')
                setSelectedExperience('I completed A1')
                setStep(3)
            }}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sky/10"
            >
            I completed A1
            </button>
        </div>
        )}
      
        {selectedExperience && (
        <div className="mt-3 flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-coral px-3 py-2 text-sm text-white">
            {selectedExperience}
            </div>
        </div>
        )}

        {step === 3 && (
        <div className="mt-4 space-y-2">
            <div className="max-w-[85%] rounded-2xl bg-sky/10 p-3 text-sm text-ink">
            What is your primary goal?
            </div>

            <button
            onClick={() => setStep(4)}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sunny/10"
            >
            School Exams
            </button>

            <button
            onClick={() => setStep(4)}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sunny/10"
            >
            Goethe Certification
            </button>

            <button
            onClick={() => setStep(4)}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sunny/10"
            >
            Speaking & Communication
            </button>

            <button
            onClick={() => setStep(4)}
            className="block w-full rounded-xl border p-2 text-left hover:bg-sunny/10"
            >
            Personal Interest
            </button>
        </div>
        )}
  
        {step === 4 && (
        <div className="mt-4 rounded-2xl border border-peach bg-mint/10 p-4">
            <h4 className="font-bold text-ink">
            Recommended Course
            </h4>

            {profile === 'school' && (
            <>
                <p className="mt-2 font-semibold text-ink">
                School German (Classes 8–10)
                </p>

                <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                <li>• School syllabus aligned</li>
                <li>• Grammar and vocabulary</li>
                <li>• Reading, writing, listening and speaking</li>
                <li>• 2 lectures per week</li>
                </ul>
            </>
            )}

            {profile === 'highschool' && (
            <>
                <p className="mt-2 font-semibold text-ink">
                High School German (Classes 11–12)
                </p>

                <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                <li>• Advanced grammar</li>
                <li>• Writing formats</li>
                <li>• Speaking practice</li>
                <li>• 2 lectures per week</li>
                </ul>
            </>
            )}

            {profile === 'adult' && experience !== 'a1' && (
            <>
                <p className="mt-2 font-semibold text-ink">
                German Beginner (A1)
                </p>

                <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                <li>• Complete beginner friendly</li>
                <li>• Goethe exam preparation</li>
                <li>• Reading, writing, listening and speaking</li>
                <li>• 4 lectures per week</li>
                </ul>
            </>
            )}

            {profile === 'adult' && experience === 'a1' && (
            <>
                <p className="mt-2 font-semibold text-ink">
                Goethe Elementary (A2)
                </p>

                <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                <li>• Continue after A1</li>
                <li>• Stronger communication skills</li>
                <li>• Grammar refinement</li>
                <li>• 4 lectures per week</li>
                </ul>
            </>
            )}
        </div>
        )}

        </div>
      )}
    </>
  )
}

export default CourseFinder