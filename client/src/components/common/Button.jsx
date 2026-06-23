import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-coral text-white shadow-btn hover:bg-coral-dark active:translate-y-0.5 active:shadow-none',
  secondary:
    'bg-sunny text-ink shadow-[0_6px_0_rgb(244_185_66/0.45)] hover:bg-sunny-dark active:translate-y-0.5 active:shadow-none',
  sky: 'bg-sky text-white shadow-[0_6px_0_rgb(61_189_180/0.4)] hover:bg-sky-dark active:translate-y-0.5 active:shadow-none',
  outline:
    'border-2 border-lavender bg-white/80 text-lavender hover:bg-lavender/10 active:translate-y-0.5',
}

function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full px-7 py-3 font-bold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
