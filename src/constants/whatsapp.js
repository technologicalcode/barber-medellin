/**
 * CONFIGURACIÓN DE WHATSAPP
 * -------------------------
 * 1. Reemplaza WHATSAPP_NUMBER por el número real con código de país,
 *    sin signos +, espacios ni guiones. Ejemplo Perú: "51987654321"
 * 2. El mensaje prellenado se puede editar en WHATSAPP_MESSAGE.
 */

export const WHATSAPP_NUMBER = "51921227445"

export const WHATSAPP_MESSAGE =
  "Hola, quiero reservar una cita en MEDELLIN Barber Premium"

/** Construye la URL de wa.me con el texto encodeado. */
export function getWhatsAppUrl(customMessage = WHATSAPP_MESSAGE) {
  const text = encodeURIComponent(customMessage)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
