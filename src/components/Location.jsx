import { motion } from "framer-motion"
import { getWhatsAppUrl } from "../constants/whatsapp"

const hours = [
  { day: "Lunes — Viernes", time: "10:00 — 20:00" },
  { day: "Sábado", time: "09:00 — 20:00" },
  { day: "Domingo", time: "10:00 — 14:00" },
]

export default function Location() {
  return (
    <section id="ubicacion" className="bg-ink-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-display text-sm tracking-[0.3em] text-accent">
            VISÍTANOS
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-snow md:text-6xl">
            Ubicación
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/*
            MAPA PLACEHOLDER
            Sustituye el src del iframe por el embed real de Google Maps
            del local (Compartir → Insertar un mapa).
          */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-h-[280px] overflow-hidden border border-line bg-panel md:min-h-[360px]"
          >
            <iframe
              title="Mapa MEDELLIN Barber Premium"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDInMzQuMSJX!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              className="h-full min-h-[280px] w-full border-0 grayscale md:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl tracking-wide text-snow">
              Horario de atención
            </h3>
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {hours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-4 text-sm md:text-base"
                >
                  <span className="text-mist">{row.day}</span>
                  <span className="font-medium text-snow">{row.time}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-mist">
              Dirección placeholder — actualiza con la calle y distrito reales
              del local.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 border border-snow bg-snow px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-transparent hover:text-snow"
            >
              Reservar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
