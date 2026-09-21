import { motion } from "framer-motion"
import BrushStroke from "./BrushStroke"

export default function About() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-panel py-16 md:py-20">
      <div className="hex-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <BrushStroke
        className="pointer-events-none absolute right-0 top-1/2 w-2/3 -translate-y-1/2"
        opacity={0.07}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl px-4 text-center md:px-6"
      >
        <p className="font-display text-sm tracking-[0.3em] text-accent">
          SOBRE NOSOTROS
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-snow md:text-5xl">
          Corte limpio. Actitud urbana.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
          Somos MEDELLIN Barber Premium: un local con luz LED hexagonal, capas
          con trazo de pincel y sillas negras. Ven por un fade preciso, quédate
          por el ambiente. Sin adornos de más — solo oficio y estilo.
        </p>
      </motion.div>
    </section>
  )
}
