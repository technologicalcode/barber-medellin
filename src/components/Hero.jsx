import { motion } from "framer-motion"
import BrushStroke from "./BrushStroke"
import { getWhatsAppUrl } from "../constants/whatsapp"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-28 md:items-center md:pb-24 md:pt-32"
    >
      {/* Foto real del local — public/hero-local.jpg */}
      <div
        className="absolute inset-0 bg-[url('/hero-local.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent"
        aria-hidden="true"
      />
      <div className="hex-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <BrushStroke
        className="pointer-events-none absolute -right-10 top-24 w-[90%] max-w-3xl rotate-[-8deg] md:top-32"
        opacity={0.1}
      />
      <BrushStroke
        className="pointer-events-none absolute -left-16 bottom-24 w-[70%] max-w-xl rotate-[6deg]"
        opacity={0.06}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-3 font-display text-sm tracking-[0.35em] text-mist md:text-base">
            MEDELLÍN · PERÚ
          </p>
          <h1 className="font-display text-[clamp(3rem,12vw,6.5rem)] leading-[0.9] tracking-[0.04em] text-snow">
            MEDELLIN
            <br />
            BARBER PREMIUM
          </h1>
          <p className="mt-5 max-w-md text-base font-light text-mist md:text-lg">
            Estilo urbano, corte premium. Luz hexagonal, sillas negras y
            actitud de calle.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center border border-snow bg-snow px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-transparent hover:text-snow md:px-8 md:text-base"
          >
            Reserva tu cita por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
