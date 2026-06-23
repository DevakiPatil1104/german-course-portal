import { motion } from 'framer-motion'

const tints = {
  coral: 'border-coral/25 bg-linear-to-br from-white to-peach/60',
  sky: 'border-sky/25 bg-linear-to-br from-white to-blush/80',
  sunny: 'border-sunny/35 bg-linear-to-br from-white to-sunny/15',
  lavender: 'border-lavender/25 bg-linear-to-br from-white to-lavender/10',
  mint: 'border-mint/35 bg-linear-to-br from-white to-mint/10',
}

function Card({ children, tint = 'coral', className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: 0.5 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={`rounded-3xl border-2 p-6 shadow-card ${tints[tint]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
