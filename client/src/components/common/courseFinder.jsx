import { useState } from 'react'

function CourseFinder() {
  const [open, setOpen] = useState(false)

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
        <div className="fixed bottom-40 right-6 z-50 w-80 rounded-3xl border border-peach bg-white p-5 shadow-xl">
          <h3 className="text-lg font-bold text-ink">
            Course Finder
          </h3>

          <p className="mt-2 text-sm text-ink-soft">
            I'll help you choose the right German course.
          </p>
        </div>
      )}
    </>
  )
}

export default CourseFinder