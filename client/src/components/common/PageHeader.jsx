import { motion } from 'framer-motion'

const accentStyles = {
  coral: 'from-coral/25 via-peach to-sunny/30 border-coral/30',
  sky: 'from-sky/25 via-blush to-blue/25 border-sky/30',
  lavender: 'from-lavender/25 via-blush to-berry/25 border-lavender/30',
  mint: 'from-mint/25 via-cream to-sunny/25 border-mint/40',
  sunny: 'from-sunny/30 via-peach to-coral/20 border-sunny/40',
}

function PageHeader({ title, description, emoji, accent = 'coral' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-3xl border-2 bg-linear-to-br px-6 py-10 sm:px-10 sm:py-12 ${accentStyles[accent]}`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sunny/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 left-1/3 h-24 w-24 rounded-full bg-lavender/30 blur-2xl" />

      <div className="relative">
        {emoji && (
          <span className="mb-3 inline-flex text-4xl" role="img" aria-hidden="true">
            {emoji}
          </span>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
        )}
      </div>
    </motion.section>
  )
}

export default PageHeader
