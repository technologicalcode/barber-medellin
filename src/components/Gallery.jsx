import { motion } from "framer-motion"
import { galleryImages } from "../constants/gallery"

/**
 * Galería del local.
 * Las URLs placeholder viven en src/constants/gallery.js —
 * reemplázalas por fotos reales en /public/gallery/ cuando las tengas.
 */
export default function Gallery() {
  return (
    <section id="galeria" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-display text-sm tracking-[0.3em] text-accent">
            EL LOCAL
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-snow md:text-6xl">
            Galería
          </h2>
          <p className="mt-3 max-w-lg text-mist">
            Hexágonos de luz, espejos y sillas negras. Ambiente moderno, no
            vintage.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <motion.figure
              key={image.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative overflow-hidden bg-panel ${
                i === 0 || i === 5 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
