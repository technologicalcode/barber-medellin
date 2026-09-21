import { motion } from "framer-motion"
import BrushStroke from "./BrushStroke"

const services = [
  {
    name: "Corte clásico",
    price: "S/ 30",
    description: "Corte limpio, proporciones impecables y acabado a detalle.",
    icon: ScissorsIcon,
  },
  {
    name: "Corte + Barba",
    price: "S/ 45",
    description: "Combo completo: fade o clásico con perfilado de barba.",
    icon: ComboIcon,
  },
  {
    name: "Diseño / Fade",
    price: "S/ 40",
    description: "Degradados precisos y diseños con trazo limpio.",
    icon: FadeIcon,
  },
  {
    name: "Tratamiento capilar",
    price: "S/ 55",
    description: "Hidratación y cuidado para dejar el cabello con presencia.",
    icon: CareIcon,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
}

export default function Services() {
  return (
    <section id="servicios" className="relative bg-ink-soft py-20 md:py-28">
      <BrushStroke
        className="pointer-events-none absolute left-1/2 top-0 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2"
        opacity={0.06}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="font-display text-sm tracking-[0.3em] text-accent">
            MENÚ
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-snow md:text-6xl">
            Servicios y precios
          </h2>
          <p className="mt-3 text-mist">
            Precios de referencia. Confirma al reservar — el detalle lo
            resolvemos en silla.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="group border border-line bg-panel p-6 transition hover:border-snow/50"
              >
                <Icon className="mb-5 h-8 w-8 text-snow" />
                <h3 className="font-display text-2xl tracking-wide text-snow">
                  {service.name}
                </h3>
                <p className="mt-1 font-display text-3xl text-snow">
                  {service.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ScissorsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 7.5 20 18M8.5 16.5 20 6" />
    </svg>
  )
}

function ComboIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 8h16M6 8c0 6 2 10 6 12 4-2 6-6 6-12" />
      <path d="M9 4h6" />
    </svg>
  )
}

function FadeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 20V8l8-4 8 4v12" />
      <path d="M8 20v-8M12 20v-6M16 20v-4" />
    </svg>
  )
}

function CareIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3c2 3 6 4 6 9a6 6 0 1 1-12 0c0-5 4-6 6-9Z" />
    </svg>
  )
}
