# kalma — Landing Page

## Proyecto

Landing page para **kalma**, un asistente de turnos completamente automatizado que funciona por WhatsApp. Gestiona reserva, recordatorio, confirmación, cancelación y reagendamiento sin intervención humana. Producto de PrestoBots, desarrollado por DigitalYa.

Mercado: negocios de servicios en Latinoamérica (clínicas, estética, gastronomía, educación).

## Stack

- React + Vite
- Tailwind CSS v4
- CSS custom properties definidas en `index.css`
- Formulario conectado a HubSpot Forms API
- Tracking: HubSpot Tracking Code (script en index.html)
- Deploy: Vercel o Netlify
- Idioma del sitio: español (voseo argentino como base)

## Marca

### Personalidad

kalma es como alguien de 30 años, relajado pero enfocado. No abruma, no complica, no genera más trabajo. Se encarga de todo en silencio.

Adjetivos que definen a kalma: relajado, ordenado, eficiente, ágil, accesible, autónomo.

Jamás debe percibirse como: engorroso, complicado, difícil de usar.

### Paleta "Arena & Agua"

| Nombre    | Variable CSS    | HEX     | Uso                                            |
| --------- | --------------- | ------- | ---------------------------------------------- |
| Petróleo  | --petroleo      | #0891B2 | Color principal. CTAs, links, isotipo, acentos  |
| Océano    | --oceano        | #155E75 | Fondos oscuros, headers, secciones de énfasis   |
| Ámbar     | --ambar         | #FBBF24 | Acento puntual. Botones CTA secundarios. 2-5%  |
| Marfil    | --marfil        | #FDF8F0 | Fondo principal. 50-60% de la superficie        |
| Espresso  | --espresso      | #1C1917 | Texto principal, wordmark. Más cálido que negro |

Proporciones: Marfil 50-60%, Espresso 20-25%, Petróleo 10-15%, Océano 5-10%, Ámbar 2-5%.

### Tipografía

- **Outfit** (Google Fonts): wordmark, títulos, headlines. Peso Light (300) para wordmark, Regular (400) o Medium (500) para títulos.
- **DM Sans** (Google Fonts): cuerpo, UI, botones. Regular (400), Medium (500), Semibold (600).

El wordmark "kalma" siempre va en Outfit Light, lowercase.

### Isotipo

Carpincho en vista de perfil, estilo lineart con trazo continuo. Ojos cerrados, postura sentada. Archivos PNG/SVG disponibles en el proyecto.

### Logo

4 variantes: horizontal (principal), vertical (stacked), isotipo solo, wordmark solo.
5 versiones de color: principal, invertido (blanco), monocromático oscuro, monocromático claro, escala de grises.

## Estructura de la landing

### 1. Navbar

Logo horizontal kalma a la izquierda. CTA "Quiero mi demo" a la derecha. Sticky on scroll.

### 2. Hero

- **H1:** Tu agenda en piloto automático
- **Subtítulo:** kalma es el asistente que gestiona tus turnos por WhatsApp de principio a fin. Reserva, confirma, recuerda, cancela y reagenda. Sin que toques el celular.
- **CTA:** Quiero ver cómo funciona
- **Texto secundario:** Sin compromiso · Configuración en minutos
- **Visual:** mockup de celular con conversación WhatsApp del bot
- **Fondo:** Marfil

### 3. Barra de métricas

Tres columnas. Números en Outfit Medium, Petróleo.

| Número      | Texto                                  |
| ----------- | -------------------------------------- |
| +1.000.000  | turnos gestionados                     |
| 80%         | de autogestión sin intervención humana |
| +200.000    | chats mensuales procesados             |

Fondo: blanco o Marfil. Separadores sutiles.

### 4. El problema

- **H2:** ¿Tu día se va en responder mensajes?
- **Texto:** Confirmás turnos a mano, respondés el mismo mensaje veinte veces al día y cuando un paciente cancela, el hueco queda vacío. Mientras tanto, tu equipo pierde horas en tareas repetitivas que no generan valor.
- **3 pain points con ícono:**
  1. **Agenda manual** — Responder WhatsApp con dos celulares, copiar datos a mano, errores que se acumulan.
  2. **Turnos vacíos** — Un paciente cancela y nadie se entera. Ese espacio se pierde junto con la facturación del día.
  3. **Equipo desbordado** — Tu gente dedica horas a confirmar y reagendar en lugar de atender lo que importa.
- **Fondo:** Marfil. Íconos en Petróleo. Texto en Espresso.

### 5. La solución

- **H2:** kalma se encarga de todo. Vos, de lo que disfrutás.
- **Texto:** kalma gestiona tu agenda completa por WhatsApp, sin que tengas que intervenir. Desde que un cliente pide un turno hasta el recordatorio del día anterior, todo pasa automáticamente.
- **4 capacidades (ícono + título + descripción):**
  1. **Reserva automática** — Tu cliente escribe por WhatsApp y kalma le ofrece los horarios disponibles. Elige, confirma, listo.
  2. **Recordatorios inteligentes** — El día anterior, kalma le avisa al cliente y le da la opción de confirmar o cambiar. Sin que vos hagas nada.
  3. **Cancelación sin drama** — Si alguien cancela, kalma libera el espacio y puede ofrecérselo a otro cliente de la lista de espera.
  4. **Reagendamiento fluido** — El cliente cambia de horario directamente desde el chat. Sin llamadas, sin idas y vueltas.
- **Fondo:** blanco. Iconografía lineal en Petróleo. Ámbar como acento en detalles.

### 6. Cómo funciona

- **H2:** Tres pasos. Cero estrés.
- **Paso 1: Conectá tu agenda** — Vinculamos kalma con tu sistema de turnos en minutos. No necesitás conocimientos técnicos.
- **Paso 2: kalma empieza a trabajar** — Desde el primer día, responde consultas, confirma turnos y envía recordatorios por WhatsApp. Automáticamente.
- **Paso 3: Vos disfrutás tu negocio** — Tu agenda ordenada, tus turnos confirmados, tu equipo con más tiempo. Así de simple.
- **Fondo:** Océano #155E75. Texto blanco. Números de paso en Ámbar. Este es el bloque oscuro de la página.

### 7. Beneficios clave

- **H2:** Menos estrés. Más turnos. Mejor negocio.
- **4 tarjetas:**
  1. **Autónomo de verdad** — Funciona las 24 horas, los 7 días. kalma no se toma descanso, no se olvida, no se confunde.
  2. **Tu equipo rinde más** — No es que necesites menos gente. Es que tu gente tiene más tiempo para lo que importa.
  3. **Menos ausencias** — Los recordatorios automáticos reducen las inasistencias. Menos turnos vacíos, más facturación.
  4. **Fácil desde el día uno** — Sin instalaciones complicadas, sin capacitaciones largas. Si tu cliente usa WhatsApp, ya sabe usar kalma.
- **Fondo:** Marfil. Tarjetas blancas con borde sutil o sombra. Carpincho como detalle decorativo sutil.

### 8. CTA final

- **H2:** Tu agenda merece estar en paz
- **Texto:** Contanos sobre tu negocio y te mostramos cómo kalma puede simplificarte el día a día.
- **Formulario campos:** Nombre, Email, Teléfono (WhatsApp), Nombre del negocio, Rubro (dropdown: Salud / Estética / Gastronomía / Educación / Otro), Botón: "Quiero mi demo"
- **Legal:** Al enviar, aceptás que nos comuniquemos con vos para coordinar una demostración. Sin spam, sin letra chica.
- **Fondo:** Petróleo o Océano. Texto blanco. Botón CTA en Ámbar con texto Espresso.

### 9. Footer

- Logo horizontal kalma versión blanca
- "kalma by PrestoBots"
- Link WhatsApp soporte
- Email de contacto
- © 2026 PrestoBots. Todos los derechos reservados.
- Fondo: Espresso. Texto blanco/Marfil. Mínimo y limpio.

## HubSpot — Integración

### Forms API

El formulario de la sección CTA envía datos a HubSpot via POST. Endpoint:

```
POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

Portal ID: `245737220` (HubSpot Starter de PrestoBots, app-na2.hubspot.com).
Form GUID: pendiente de crear en HubSpot → Marketing → Formularios.

Payload ejemplo:

```json
{
  "fields": [
    { "name": "firstname", "value": "Juan" },
    { "name": "email", "value": "juan@clinica.com" },
    { "name": "phone", "value": "+5492994001234" },
    { "name": "company", "value": "Clínica del Sur" },
    { "name": "industry", "value": "Salud" }
  ],
  "context": {
    "pageUri": "https://kalma.com.ar",
    "pageName": "kalma - Landing"
  }
}
```

### Tracking Code

Agregar en `index.html` antes de `</body>`:

```html
<!-- HubSpot Tracking Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/245737220.js"></script>
```

## Reglas de tono y copy

- Nunca usar signos de exclamación excesivos (!!!)
- Nunca decir "bot" → decir "asistente" o "kalma"
- Nunca decir "no necesitás más gente" → "tu equipo tiene más tiempo"
- Nunca usar jerga técnica innecesaria
- Voseo argentino como base (vos, tenés, podés), adaptable a tuteo para otros mercados
- Emojis: no usar en la landing. Solo dentro de mockups del chat de WhatsApp
- Tono: relajado pero profesional. Directo y claro. Optimista sin exagerar.

## Convenciones de código

- Componentes funcionales con hooks
- Un componente por sección (Hero.jsx, Metrics.jsx, Problem.jsx, Solution.jsx, HowItWorks.jsx, Benefits.jsx, CtaForm.jsx, Footer.jsx)
- Navbar como componente separado (Navbar.jsx)
- Tailwind para layout y spacing, CSS custom properties para colores de marca
- Lucide React para iconografía
- Imágenes y assets en `/src/assets`
- Favicons en `/public`
- Responsive mobile-first
- Sin dark mode
- Sin localStorage ni sessionStorage