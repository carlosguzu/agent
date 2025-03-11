# Agente de Predicción de Texto para Correos Electrónicos Corporativos


![screen](https://github.com/user-attachments/assets/16b3c926-100b-41d8-93d8-c5e695ed245d)
www.carlosguzman.me
Este proyecto implementa un agente de predicción de texto para ayudar en la redacción de correos electrónicos en entornos corporativos. Actualmente, el sistema utiliza un modelo basado en n-gramas para generar sugerencias de texto, pero se planea escalar a un modelo de IA de última generación en el futuro.

## Estado Actual

- **Modelo Actual:**  
  Se utiliza un modelo n-grama para generar sugerencias de palabras y frases.  
  - **Ventajas:**  
    - Simplicidad de implementación.
    - Bajo consumo de recursos computacionales.
    - Respuesta rápida en escenarios con vocabulario limitado.
  - **Limitaciones:**  
    - Capacidad limitada para comprender contextos complejos.
    - Menor precisión y coherencia en las sugerencias.
    - Escalabilidad reducida para adaptarse a lenguaje más natural y diverso.

## Limitaciones

- **Precisión y Contexto:**  
  Los n-gramas carecen de la capacidad para capturar relaciones de largo alcance en el texto, lo que puede resultar en sugerencias menos precisas en escenarios complejos o cuando se requiere un lenguaje más formal y especializado.
  
- **Flexibilidad:**  
  La estructura n-grama es estática y no se adapta a cambios contextuales en tiempo real, lo que limita la personalización y el aprendizaje basado en el historial del usuario.

- **Escalabilidad:**  
  A medida que el volumen y la complejidad del lenguaje aumenten, la solución basada en n-gramas podría no ser suficiente para manejar el procesamiento y generación de texto de manera efectiva en entornos corporativos exigentes.

## Escalabilidad a Futuro

Para superar estas limitaciones, se está planificando la integración de un modelo de inteligencia artificial más avanzado. En concreto, se está considerando el uso de la API de [Qwen 2.5 VL 72B Instruct (free)](https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct:free/api) de OpenRouter. Esta solución de IA permitirá:

- **Mejora en la Comprensión del Contexto:**  
  Los modelos de IA modernos, como Qwen 2.5, tienen la capacidad de capturar relaciones de largo alcance y entender contextos complejos, lo que se traducirá en sugerencias más precisas y coherentes.

- **Adaptación y Aprendizaje Continuo:**  
  Con técnicas de fine-tuning y aprendizaje continuo, el modelo podrá adaptarse al estilo y preferencias de redacción de cada usuario, mejorando la personalización y la calidad de las sugerencias a lo largo del tiempo.


## Próximos Pasos

1. **Integración del Modelo de IA:**  
   - Evaluar y realizar pruebas de la API de Qwen 2.5 para determinar su rendimiento y adecuación en el entorno corporativo.
   - Desarrollar un módulo de integración que permita la transición transparente entre el modelo n-grama actual y el nuevo modelo de IA.

