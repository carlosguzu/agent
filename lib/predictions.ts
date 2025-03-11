// Frases y palabras comunes para nuestro modelo de predicción simple
const commonPhrases = [
  "Cordial saludo",
  "Estimado/a [Nombre]",
  "Espero que este mensaje le encuentre bien",
  "Le escribo para informarle que",
  "Agradezco su atención a este asunto",
  "Quedo a su disposición para cualquier consulta adicional",
  "Atentamente",
  "Saludos cordiales",
  "En relación con nuestra conversación anterior",
  "Adjunto encontrará el documento solicitado",
  "Por favor, no dude en contactarme si tiene alguna pregunta",
  "Agradezco su pronta respuesta",
  "Nos complace informarle que",
  "Lamentamos los inconvenientes causados",
  "Estamos a su servicio para cualquier requerimiento",
  "Quedamos a la espera de su respuesta",
  "Le saludo atentamente",
  "En referencia a",
  "Agradecería si pudiera",
  "Quedo a la espera de su respuesta",
  "Si requiere información adicional",
  "Por favor, no dude en contactar conmigo",
  "Le agradezco de antemano",
  "Espero tener noticias suyas pronto",
  "Gracias por su atención",
  "Para cualquier consulta, estoy a su disposición",
  "Estimado equipo",
  "Me dirijo a usted para",
  "Es un placer anunciar que",
  "Con respecto a su solicitud",
  "Le informamos que",
  "Nos gustaría invitarle a",
  "Por medio de la presente",
  "Le escribo en nombre de",
  "Me permito recordarle que",
  "Agradecemos su interés en",
  "Estamos encantados de colaborar con usted",
  "Por favor, encuentre adjunto",
  "Le rogamos confirme su asistencia",
  "Quisiéramos expresar nuestra gratitud por",
  "Estamos disponibles para discutir este asunto en detalle",
  "Le mantendremos informado sobre cualquier novedad",
  "Esperamos que esta información le sea de utilidad",
  "No dude en comunicarse con nosotros para más detalles",
  "Le deseamos un excelente día",
  "Estamos comprometidos en brindarle el mejor servicio",
  "Le agradecemos por su confianza en nuestra empresa",
  "Estamos a su disposición para cualquier aclaración",
  "Le enviamos un cordial saludo",
  "Esperamos seguir contando con su preferencia",
  "Estamos trabajando para resolver este asunto a la brevedad",
  "Le notificaremos una vez que el proceso haya concluido",
  "Apreciamos su paciencia y comprensión",
  "Estamos aquí para asistirle en lo que necesite",
  "Le extendemos nuestras más sinceras disculpas por cualquier inconveniente",
  "Nos esforzamos por mejorar continuamente nuestros servicios",
  "Su opinión es muy importante para nosotros",
  "Estamos agradecidos por su colaboración",
  "Le invitamos a participar en",
  "Estamos disponibles para una reunión en el horario que más le convenga",
  "Le proporcionaremos una actualización tan pronto como sea posible",
  "Estamos encantados de responder a sus preguntas",
  "Le confirmamos que hemos recibido su solicitud",
  "Estamos procesando su requerimiento",
  "Le enviaremos los detalles en breve",
  "Agradecemos su retroalimentación",
  "Estamos comprometidos con su satisfacción",
  "Le informaremos sobre los próximos pasos",
  "Estamos disponibles para cualquier consulta adicional",
  "Le agradecemos por su atención y tiempo",
  "Nos complace responder a sus inquietudes",
  "Estamos aquí para apoyarle en este proceso",
  "Le mantendremos al tanto de cualquier actualización",
  "Apreciamos su interés en nuestros servicios",
  "Estamos dedicados a ofrecerle soluciones efectivas",
  "Le invitamos a visitar nuestra página web para más información",
  "Estamos disponibles para una llamada telefónica si lo prefiere",
  "Le enviaremos una confirmación una vez que esté todo listo",
  "Agradecemos su confianza y lealtad",
  "Estamos trabajando arduamente para cumplir con sus expectativas",
  "Le aseguramos que su satisfacción es nuestra prioridad",
  "Estamos encantados de poder servirle",
  "Le proporcionaremos más detalles en nuestra próxima comunicación",
  "Agradecemos su comprensión en este asunto",
  "Estamos disponibles para cualquier asistencia que requiera",
  "Le deseamos mucho éxito en sus proyectos",
  "Estamos comprometidos en construir una relación sólida con usted",
  "Le enviaremos una encuesta para conocer su opinión",
  "Agradecemos su participación en este evento",
  "Estamos emocionados de colaborar con usted",
  "Le notificaremos sobre futuras oportunidades",
  "Estamos aquí para facilitar su experiencia",
  "Le invitamos a unirse a nuestra comunidad en línea",
  "Agradecemos su continuo apoyo",
  "Estamos disponibles para resolver cualquier duda que tenga",
  "Le enviaremos una propuesta detallada",
  "Estamos ansiosos por comenzar este proyecto juntos",
  "Le mantendremos informado sobre el progreso",
  "Apreciamos su disposición para trabajar con nosotros",
  "Estamos comprometidos en ofrecerle la mejor calidad",
  "Le agradecemos por considerar nuestra oferta",
  "Estamos aquí para garantizar su satisfacción",
  "Le proporcionaremos una solución personalizada",
  "Agradecemos su interés y esperamos colaborar con usted",
  "Estamos disponibles para una consulta en cualquier momento",
  "Le enviaremos una factura detallada",
  "Estamos encantados de atender sus necesidades",
  "Le confirmamos que su pedido ha sido procesado",
  "Estamos trabajando en su solicitud",
  "Le informaremos una vez que el envío esté en camino",
  "Apreciamos su preferencia por nuestros productos",
  "Estamos aquí para responder a sus consultas",
  "Le agradecemos por su reciente compra",
  "Estamos comprometidos en brindarle una experiencia excepcional",
  "Le proporcionaremos actualizaciones periódicas",
  "Agradecemos su paciencia mientras resolvemos este asunto",
  "Estamos disponibles para discutir sus requerimientos",
  "Le invitamos a explorar nuestras nuevas ofertas",
  "Estamos emocionados de presentarle nuestras novedades",
  "Le enviaremos una confirmación de su reserva",
  "Estamos aquí para asegurar que todo salga según lo planeado",
  "Le agradecemos por elegirnos como su proveedor",
  "Estamos dedicados a superar sus expectativas",
  "Le proporcionaremos soporte continuo",
  "Apreciamos su colaboración en este proyecto",
  "Estamos disponibles para una reunión presencial o virtual",
  "Le mantendremos informado sobre cualquier cambio",
  "Agradecemos su compromiso con nuestra causa",
  "Estamos aquí para facilitar su proceso de compra",
  "Le invitamos a contactarnos para más información",
  "Estamos encantados de resolver sus inquietudes",
  "Le confirmamos que hemos recibido su pago",
  "Estamos procesando su devolución",
  "Le informaremos una vez que el reembolso sea efectivo",
  "Apreciamos su comprensión en este proceso",
  "Estamos aquí para garantizar su tranquilidad",
  "Le agradecemos por su reciente visita",
  "Estamos comprometidos en mejorar continuamente",
  "Le proporcionaremos una actualización semanal",
  "Agradecemos su feedback constructivo"]
 


// Modelo simple de n-gramas para predicciones
const ngrams: Record<string, string[]> = {}

// Construir n-gramas a partir de frases comunes
commonPhrases.forEach((phrase) => {
  const words = phrase.toLowerCase().split(" ")

  for (let i = 0; i < words.length - 1; i++) {
    const prefix = words.slice(0, i + 1).join(" ")
    const nextWord = words[i + 1]

    if (!ngrams[prefix]) {
      ngrams[prefix] = []
    }

    if (!ngrams[prefix].includes(prefix + " " + nextWord)) {
      ngrams[prefix].push(prefix + " " + nextWord)
    }
  }
})

export async function getPredictions(input: string): Promise<string[]> {
  // Simular retraso de API
  await new Promise((resolve) => setTimeout(resolve, 50))

  const lowercaseInput = input.toLowerCase().trim()

  // Coincidencias directas de nuestro modelo de n-gramas
  const directMatches = Object.keys(ngrams)
    .filter((key) => key.startsWith(lowercaseInput) && key !== lowercaseInput)
    .sort((a, b) => a.length - b.length)

  // Coincidencias de continuación de nuestro modelo de n-gramas
  const continuationMatches = ngrams[lowercaseInput] || []

  // Combinar y eliminar duplicados
  const allMatches = [...directMatches, ...continuationMatches]
  const uniqueMatches = Array.from(new Set(allMatches))

  // Ordenar por relevancia (completaciones más cortas primero)
  return uniqueMatches
    .sort((a, b) => {
      // Priorizar continuaciones exactas
      const aIsContinuation = a.startsWith(lowercaseInput)
      const bIsContinuation = b.startsWith(lowercaseInput)

      if (aIsContinuation && !bIsContinuation) return -1
      if (!aIsContinuation && bIsContinuation) return 1

      // Luego ordenar por longitud
      return a.length - b.length
    })
    .slice(0, 5) // Devolver las 5 mejores predicciones
}

// Para implementaciones más avanzadas, esto podría ser reemplazado con una llamada a una API en Python
export async function fetchPredictionsFromPython(input: string): Promise<string[]> {
  // Esto se implementaría como una llamada a una API en un backend en Python
  // Por ahora, solo usaremos nuestro modelo simple
  return getPredictions(input)
}

