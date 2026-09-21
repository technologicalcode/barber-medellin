import { getWhatsAppUrl, WHATSAPP_NUMBER } from "../constants/whatsapp"

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-line bg-ink py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <p className="font-display text-3xl tracking-[0.08em] text-snow">
            MEDELLIN BARBER PREMIUM
          </p>
          <p className="mt-3 max-w-xs text-sm text-mist">
            Estilo urbano. Corte premium. Reserva directo por WhatsApp.
          </p>
        </div>

        <div>
          <p className="font-display text-lg tracking-wider text-snow">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-snow"
              >
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
            </li>
            <li>Email: contacto@medellinbarber.pe</li>
          </ul>
        </div>

        <div>
          <p className="font-display text-lg tracking-wider text-snow">
            Redes
          </p>
          <div className="mt-3 flex gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-mist transition hover:text-snow"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-mist transition hover:text-snow"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-line px-4 pt-6 md:px-6">
        <p className="text-center text-xs text-accent">
          Desarrollado por{" "}
          <a
            href="https://technologicalcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-2 transition hover:text-snow hover:decoration-snow"
          >
            technologicalCode
          </a>
        </p>
      </div>
    </footer>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}
