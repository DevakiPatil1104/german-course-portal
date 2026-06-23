import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../../utils/constants'

function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#25D366] text-white shadow-[0_8px_24px_rgb(37_211_102/0.45)]"
    >
      <FaWhatsapp className="h-8 w-8" />
    </motion.a>
  )
}

export default WhatsAppButton
