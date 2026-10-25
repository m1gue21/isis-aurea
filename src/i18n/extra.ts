import type { Lang } from './content';

export const extra = {
  es: {
    approach: {
      kicker: 'Mi enfoque',
      title: 'No es adivinar: es entender el idioma de las cartas',
      text: 'Las cartas hablan un lenguaje simbólico. Mi trabajo es interpretarlo y traducirlo para ti, para que tengas una base clara de lo que puede pasar, sin olvidar que el mundo es cambiante y volátil. Más que predecir, buscamos la razón de ser de lo que vives y resolvemos los bloqueos y nudos que frenan tu camino.',
      pillars: [
        { icon: '☥', t: 'Interpretar, no adivinar', d: 'Traduzco el mensaje de las cartas con método, profesionalismo y sensibilidad.' },
        { icon: '✦', t: 'Una base de lo que puede pasar', d: 'Conoce tendencias de tu presente y tu futuro, con guía y advertencias para decidir mejor.' },
        { icon: '❂', t: 'Soltar bloqueos y nudos', d: 'Encontramos el porqué de las situaciones que se repiten y cómo destrabarlas.' },
        { icon: '𓂀', t: 'Descubrir lo oculto', d: 'Lo que guardas, incluso de ti misma o de ti mismo, y no logras percibir a simple vista.' },
      ],
    },
    notWitch: {
      title: 'No es brujería. Es lectura sensorial y profesional.',
      text: 'No soy bruja ni trabajo con brujería. Es un trabajo sensorial y profesional de interpretación de signos, que te ayuda a descubrirte en aquello que no logras ver por ti mismo.',
      chips: ['Sin brujería', 'Sin miedo ni presión', 'Interpretación profesional', 'Con respeto y calma'],
    },
    areas: {
      kicker: 'Tu destino',
      title: 'Encuentra tu rumbo en cada área de tu vida',
      items: [
        { icon: '✚', t: 'Salud', d: 'Bienestar y equilibrio para cuidar de ti.' },
        { icon: '◈', t: 'Negocios', d: 'Decisiones, socios y oportunidades de crecer.' },
        { icon: '♡', t: 'Amor', d: 'Pareja, vínculos y corazón en armonía.' },
        { icon: '⌂', t: 'Familia', d: 'Paz y claridad en tu hogar y tus seres queridos.' },
        { icon: '☀', t: 'Suerte', d: 'Caminos abiertos y buena fortuna en general.' },
      ],
    },
    compare: {
      kicker: 'Elige tu lectura',
      title: 'Dos barajas, dos profundidades',
      spanish: {
        name: 'Baraja española',
        horizon: 'Corto plazo',
        span: 'Hasta 6 meses',
        points: ['Respuestas claras y directas', 'Ideal para decisiones del momento', 'Amor, trabajo, dinero y familia'],
        cta: 'Quiero baraja española',
        wa: 'Hola, me interesa una lectura con baraja española.',
      },
      egyptian: {
        name: 'Tarot egipcio',
        horizon: 'Visión profunda',
        span: '1 año o más',
        badge: 'Lectura premium',
        points: [
          'Interpretación de presente y futuro a largo plazo',
          'Se invocan guías espirituales egipcios que permiten un entendimiento más profundo',
          'Mayor inversión por la profundidad del trabajo',
        ],
        cta: 'Quiero tarot egipcio',
        wa: 'Hola, me interesa una lectura de tarot egipcio.',
      },
    },
    privacy: {
      kicker: 'Confianza',
      title: 'Tu intimidad está protegida',
      text: 'Puedes soltarte y abrirte con total tranquilidad. Manejo secreto profesional y respeto absoluto por la vida y la intimidad de cada persona. Aquí nadie te juzga.',
      points: [
        { icon: '🔒', t: 'Secreto profesional', d: 'Lo que cuentas se queda aquí.' },
        { icon: '🤍', t: 'Respeto total', d: 'Sin juicios, con calidez y empatía.' },
        { icon: '🛡', t: 'Seguridad', d: 'Un espacio seguro para abrirte.' },
      ],
    },
  },
  en: {
    approach: {
      kicker: 'My approach',
      title: 'It is not fortune telling: it is understanding the language of the cards',
      text: 'The cards speak a symbolic language. My work is to interpret and translate it for you, so you have a clear foundation of what may happen, remembering that the world is changing and unpredictable. More than predicting, we look for the reason behind what you live and resolve the blocks and knots holding your path back.',
      pillars: [
        { icon: '☥', t: 'Interpreting, not guessing', d: 'I translate the cards’ message with method, professionalism and sensitivity.' },
        { icon: '✦', t: 'A foundation of what may come', d: 'Learn the trends of your present and future, with guidance and warnings to decide better.' },
        { icon: '❂', t: 'Releasing blocks and knots', d: 'We find why situations repeat and how to untie them.' },
        { icon: '𓂀', t: 'Discovering what is hidden', d: 'What you keep, even from yourself, and cannot see at first glance.' },
      ],
    },
    notWitch: {
      title: 'Not witchcraft. A sensory, professional reading.',
      text: 'I am not a witch and I do not practice witchcraft. This is sensory, professional work of interpreting signs, helping you discover what you cannot see on your own.',
      chips: ['No witchcraft', 'No fear or pressure', 'Professional interpretation', 'With respect and calm'],
    },
    areas: {
      kicker: 'Your destiny',
      title: 'Find your direction in every area of your life',
      items: [
        { icon: '✚', t: 'Health', d: 'Wellbeing and balance to take care of yourself.' },
        { icon: '◈', t: 'Business', d: 'Decisions, partners and opportunities to grow.' },
        { icon: '♡', t: 'Love', d: 'Partner, bonds and a heart in harmony.' },
        { icon: '⌂', t: 'Family', d: 'Peace and clarity at home and with loved ones.' },
        { icon: '☀', t: 'Luck', d: 'Open paths and good fortune in general.' },
      ],
    },
    compare: {
      kicker: 'Choose your reading',
      title: 'Two decks, two depths',
      spanish: {
        name: 'Spanish deck',
        horizon: 'Short term',
        span: 'Up to 6 months',
        points: ['Clear and direct answers', 'Ideal for decisions of the moment', 'Love, work, money and family'],
        cta: 'I want the Spanish deck',
        wa: 'Hello, I am interested in a Spanish deck reading.',
      },
      egyptian: {
        name: 'Egyptian tarot',
        horizon: 'Deep vision',
        span: '1 year or more',
        badge: 'Premium reading',
        points: [
          'Long-term interpretation of present and future',
          'Egyptian spiritual guides are invoked, allowing a deeper understanding',
          'Higher investment because of the depth of the work',
        ],
        cta: 'I want the Egyptian tarot',
        wa: 'Hello, I am interested in an Egyptian tarot reading.',
      },
    },
    privacy: {
      kicker: 'Trust',
      title: 'Your privacy is protected',
      text: 'You can let go and open up with complete peace of mind. I keep professional secrecy and absolute respect for each person’s life and privacy. Nobody judges you here.',
      points: [
        { icon: '🔒', t: 'Professional secrecy', d: 'What you share stays here.' },
        { icon: '🤍', t: 'Total respect', d: 'No judgment, only warmth and empathy.' },
        { icon: '🛡', t: 'Safety', d: 'A safe space to open up.' },
      ],
    },
  },
} satisfies Record<Lang, unknown>;
