export type Lang = 'es' | 'en';

export interface Service {
  icon: string;
  title: string;
  desc: string;
  wa: string;
}

export interface Card {
  id: string;
  name: string;
  meaning: string;
}

export const content = {
  es: {
    meta: {
      title: 'Isis Aurea · Lecturas de cartas egipcias y españolas',
      description:
        'Interpretación profesional de cartas egipcias y españolas. Resuelve bloqueos y encuentra tu rumbo en salud, negocios, amor, familia y suerte. Confidencial, online, en español e inglés.',
    },
    nav: { services: 'Servicios', cards: 'Lecturas', about: 'Guía', how: 'Cómo funciona', faq: 'Preguntas', cta: 'Escríbeme' },
    hero: {
      kicker: 'Lecturas · Rituales · Energía',
      title: 'Entiende el idioma de las cartas y encuentra tu rumbo',
      text: 'Interpretación profesional de cartas egipcias y españolas para conocer tu presente y tu futuro, resolver bloqueos y abrir caminos en salud, negocios, amor, familia y suerte. Con total confidencialidad, para todo el mundo.',
      cta: 'Quiero mi lectura',
      secondary: 'Ver servicios',
      waMsg: 'Hola, vi tu página y quiero agendar una lectura.',
    },
    services: {
      kicker: 'Servicios',
      title: 'Un camino para cada necesidad',
      ask: 'Consultar por WhatsApp',
      items: [
        {
          icon: '☥',
          title: 'Lecturas de cartas',
          desc: 'Cartas egipcias, baraja española o ambas combinadas. Claridad sobre amor, trabajo, dinero y decisiones.',
          wa: 'Hola, me interesa una lectura de cartas.',
        },
        {
          icon: '❀',
          title: 'Baños espirituales',
          desc: 'Rituales de limpieza con hierbas, flores y sales para soltar cargas y renovar tu energía.',
          wa: 'Hola, quiero información sobre los baños espirituales.',
        },
        {
          icon: '☀',
          title: 'Atracción de suerte',
          desc: 'Rituales y velas para abrir caminos, atraer prosperidad, oportunidades y abundancia.',
          wa: 'Hola, quiero un ritual para atraer suerte y abundancia.',
        },
        {
          icon: '♡',
          title: 'Amor y armonía',
          desc: 'Trabajo de amor propio, armonía de pareja y apertura a nuevas relaciones, siempre respetando el libre albedrío.',
          wa: 'Hola, me interesa un trabajo de amor y armonía.',
        },
        {
          icon: '𓂀',
          title: 'Protección y envidia',
          desc: 'Protección energética contra la envidia, el mal de ojo y las energías pesadas que te rodean.',
          wa: 'Hola, necesito protección contra la envidia y malas energías.',
        },
        {
          icon: '✦',
          title: 'Lectura de tu año',
          desc: 'Una mirada amplia a los próximos doce meses: oportunidades, retos y consejos mes a mes.',
          wa: 'Hola, quiero la lectura de mi año.',
        },
      ] as Service[],
    },
    cards: {
      kicker: 'Prueba las cartas',
      title: 'Saca tu mini tirada de 3 cartas',
      text: 'Elige una baraja, concentra tu intención y descubre un adelanto. La lectura completa y personalizada se hace por WhatsApp.',
      egyptian: 'Cartas egipcias',
      spanish: 'Baraja española',
      draw: 'Sacar mis cartas',
      again: 'Barajar de nuevo',
      ctaHint: 'Tus cartas viajan en el mensaje para que yo ya sepa qué te salió.',
      positions: ['Pasado', 'Presente', 'Futuro'],
      cta: 'Recibir mi lectura completa por WhatsApp',
      note: 'Esto es un adelanto simbólico. Tu lectura real es personal.',
      waMsg: 'Hola ✨ Acabo de sacar mi mini tirada de {deck} en tu página y quiero que me hagas la lectura completa.\n\nMis cartas:\n{cards}\n\nMe gustaría enfocarme en: (salud / negocios / amor / familia / suerte)\n\n¿Qué disponibilidad tienes? Muchas gracias 🙏',
      decks: {
        egyptian: [
          { id: 'isis', name: 'Isis', meaning: 'Intuición, protección y magia propia.' },
          { id: 'osiris', name: 'Osiris', meaning: 'Renacimiento y un nuevo ciclo.' },
          { id: 'anubis', name: 'Anubis', meaning: 'Guía en el tránsito; suelta lo que ya terminó.' },
          { id: 'horus', name: 'Horus', meaning: 'Visión clara y victoria.' },
          { id: 'ra', name: 'Ra', meaning: 'Energía, éxito y vitalidad.' },
          { id: 'maat', name: 'Maat', meaning: 'Equilibrio, verdad y justicia.' },
          { id: 'bastet', name: 'Bastet', meaning: 'Protección del hogar y alegría.' },
          { id: 'thoth', name: 'Thot', meaning: 'Sabiduría y mensajes importantes.' },
        ] as Card[],
        spanish: [
          { id: 'oros-1', name: 'As de Oros', meaning: 'Nueva oportunidad de prosperidad.' },
          { id: 'oros-2', name: '2 de Oros', meaning: 'Equilibrio en tus finanzas.' },
          { id: 'oros-10', name: '10 de Oros', meaning: 'Estabilidad y bienestar para ti y tu familia.' },
          { id: 'oros-rey', name: 'Rey de Oros', meaning: 'Éxito, solidez y una persona que te respalda.' },
          { id: 'copas-1', name: 'As de Copas', meaning: 'Amor nuevo o renovado.' },
          { id: 'copas-3', name: '3 de Copas', meaning: 'Celebración, amistad y alegría.' },
          { id: 'copas-sota', name: 'Sota de Copas', meaning: 'Un mensaje o noticia afectiva.' },
          { id: 'espadas-1', name: 'As de Espadas', meaning: 'Claridad y victoria tras una decisión firme.' },
          { id: 'espadas-7', name: '7 de Espadas', meaning: 'Cuidado con engaños; guarda tus planes.' },
          { id: 'bastos-1', name: 'As de Bastos', meaning: 'Energía y un nuevo proyecto.' },
          { id: 'bastos-5', name: '5 de Bastos', meaning: 'Competencia o tensión que se resuelve.' },
          { id: 'bastos-rey', name: 'Rey de Bastos', meaning: 'Liderazgo y confianza en ti.' },
        ] as Card[],
      },
    },
    about: {
      kicker: 'Tu guía',
      title: 'Una voz cálida para momentos de claridad',
      text: 'Desde hace años acompaño a personas de distintos países a encontrar respuestas, soltar lo que pesa y abrir caminos. Mi lectura une la sabiduría de las cartas egipcias y la tradición de la baraja española con sensibilidad profesional, respeto y cercanía. No es brujería: es el arte de interpretar signos.',
      points: ['Atención en español e inglés', 'Consultas online desde cualquier país', 'Secreto profesional y confidencialidad total'],
    },
    how: {
      kicker: 'Cómo funciona',
      title: 'Tres pasos sencillos',
      steps: [
        { n: '1', t: 'Escríbeme', d: 'Cuéntame por WhatsApp qué necesitas y en qué idioma prefieres la consulta.' },
        { n: '2', t: 'Agendamos', d: 'Acordamos el servicio, la fecha y el horario según tu zona horaria.' },
        { n: '3', t: 'Recibe tu guía', d: 'Tu lectura o ritual por videollamada, audio o mensaje, con claridad y calidez.' },
      ],
    },
    faq: {
      kicker: 'Preguntas',
      title: 'Lo que suelen preguntarme',
      items: [
        { q: '¿Es brujería o adivinación?', a: 'No. Es un trabajo sensorial y profesional de interpretación de las cartas. No adivino: traduzco su mensaje para que tengas una base de lo que puede pasar y entiendas la razón de lo que vives.' },
        { q: '¿Cuál es la diferencia entre la baraja española y el tarot egipcio?', a: 'La baraja española ve el corto plazo, hasta 6 meses. El tarot egipcio es más profundo: interpreta presente y futuro a un año o más, y tiene una mayor inversión por la profundidad del trabajo.' },
        { q: '¿Mis datos y lo que cuento son confidenciales?', a: 'Totalmente. Manejo secreto profesional y respeto absoluto por tu vida e intimidad.' },
        { q: '¿Atiendes desde otros países?', a: 'Sí. Todas las consultas son online y me adapto a tu zona horaria.' },
        { q: '¿En qué idiomas atiendes?', a: 'En español e inglés.' },
        { q: '¿Cómo es la lectura?', a: 'Por videollamada, nota de voz o mensajes, como prefieras. Recibes interpretación y consejos claros.' },
        { q: '¿Cómo pago?', a: 'Te explico las opciones disponibles por WhatsApp al agendar.' },
      ],
    },
    final: {
      title: '¿Lista para tu primera lectura?',
      text: 'Escríbeme hoy y empecemos a abrir tu camino.',
      cta: 'Hablar por WhatsApp',
      waMsg: 'Hola, quiero agendar una consulta.',
    },
    footer: {
      disclaimer:
        'Los servicios tienen carácter espiritual y de entretenimiento. No sustituyen asesoría médica, legal ni financiera.',
      rights: 'Todos los derechos reservados.',
    },
    fab: 'Escríbeme por WhatsApp',
  },
  en: {
    meta: {
      title: 'Isis Aurea · Egyptian & Spanish Card Readings',
      description:
        'Professional interpretation of Egyptian and Spanish cards. Resolve blocks and find your direction in health, business, love, family and luck. Confidential, online, in English and Spanish.',
    },
    nav: { services: 'Services', cards: 'Cards', about: 'Your guide', how: 'How it works', faq: 'FAQ', cta: 'Message me' },
    hero: {
      kicker: 'Readings · Rituals · Energy',
      title: 'Understand the language of the cards and find your direction',
      text: 'Professional interpretation of Egyptian and Spanish cards to understand your present and future, resolve blocks and open paths in health, business, love, family and luck. Fully confidential, for people worldwide.',
      cta: 'Book my reading',
      secondary: 'See services',
      waMsg: 'Hello, I saw your website and I would like to book a reading.',
    },
    services: {
      kicker: 'Services',
      title: 'A path for every need',
      ask: 'Ask on WhatsApp',
      items: [
        {
          icon: '☥',
          title: 'Card readings',
          desc: 'Egyptian cards, the Spanish deck, or both combined. Clarity on love, work, money and decisions.',
          wa: 'Hello, I am interested in a card reading.',
        },
        {
          icon: '❀',
          title: 'Spiritual baths',
          desc: 'Cleansing rituals with herbs, flowers and salts to release heaviness and renew your energy.',
          wa: 'Hello, I would like information about spiritual baths.',
        },
        {
          icon: '☀',
          title: 'Luck attraction',
          desc: 'Rituals and candle work to open paths and attract prosperity, opportunities and abundance.',
          wa: 'Hello, I would like a ritual to attract luck and abundance.',
        },
        {
          icon: '♡',
          title: 'Love & harmony',
          desc: 'Self-love work, harmony in relationships and openness to new love, always respecting free will.',
          wa: 'Hello, I am interested in love and harmony work.',
        },
        {
          icon: '𓂀',
          title: 'Protection & envy',
          desc: 'Energetic protection against envy, the evil eye and heavy energies around you.',
          wa: 'Hello, I need protection from envy and negative energy.',
        },
        {
          icon: '✦',
          title: 'Your year ahead',
          desc: 'A wide look at the next twelve months: opportunities, challenges and month-by-month advice.',
          wa: 'Hello, I would like a reading for my year ahead.',
        },
      ] as Service[],
    },
    cards: {
      kicker: 'Try the cards',
      title: 'Draw your 3-card mini spread',
      text: 'Choose a deck, focus on your intention and discover a preview. Your complete, personal reading happens on WhatsApp.',
      egyptian: 'Egyptian cards',
      spanish: 'Spanish deck',
      draw: 'Draw my cards',
      again: 'Shuffle again',
      ctaHint: 'Your cards travel in the message so I already know what you drew.',
      positions: ['Past', 'Present', 'Future'],
      cta: 'Get my full reading on WhatsApp',
      note: 'This is a symbolic preview. Your real reading is personal.',
      waMsg: 'Hello ✨ I just drew my mini spread with the {deck} on your website and I would like the full reading.\n\nMy cards:\n{cards}\n\nI would like to focus on: (health / business / love / family / luck)\n\nWhen are you available? Thank you so much 🙏',
      decks: {
        egyptian: [
          { id: 'isis', name: 'Isis', meaning: 'Intuition, protection and your own magic.' },
          { id: 'osiris', name: 'Osiris', meaning: 'Rebirth and a new cycle.' },
          { id: 'anubis', name: 'Anubis', meaning: 'A guide through transition; release what has ended.' },
          { id: 'horus', name: 'Horus', meaning: 'Clear vision and victory.' },
          { id: 'ra', name: 'Ra', meaning: 'Energy, success and vitality.' },
          { id: 'maat', name: 'Maat', meaning: 'Balance, truth and justice.' },
          { id: 'bastet', name: 'Bastet', meaning: 'Protection of the home and joy.' },
          { id: 'thoth', name: 'Thoth', meaning: 'Wisdom and important messages.' },
        ] as Card[],
        spanish: [
          { id: 'oros-1', name: 'Ace of Coins', meaning: 'A new opportunity for prosperity.' },
          { id: 'oros-2', name: '2 of Coins', meaning: 'Balance in your finances.' },
          { id: 'oros-10', name: '10 of Coins', meaning: 'Stability and wellbeing for you and your family.' },
          { id: 'oros-rey', name: 'King of Coins', meaning: 'Success, solidity and someone who supports you.' },
          { id: 'copas-1', name: 'Ace of Cups', meaning: 'New or renewed love.' },
          { id: 'copas-3', name: '3 of Cups', meaning: 'Celebration, friendship and joy.' },
          { id: 'copas-sota', name: 'Page of Cups', meaning: 'A message or emotional news.' },
          { id: 'espadas-1', name: 'Ace of Swords', meaning: 'Clarity and victory after a firm decision.' },
          { id: 'espadas-7', name: '7 of Swords', meaning: 'Beware of deception; keep your plans private.' },
          { id: 'bastos-1', name: 'Ace of Clubs', meaning: 'Energy and a new project.' },
          { id: 'bastos-5', name: '5 of Clubs', meaning: 'Competition or tension that resolves.' },
          { id: 'bastos-rey', name: 'King of Clubs', meaning: 'Leadership and trust in yourself.' },
        ] as Card[],
      },
    },
    about: {
      kicker: 'Your guide',
      title: 'A warm voice for moments of clarity',
      text: 'For years I have been helping people from many countries find answers, let go of what weighs on them and open new paths. My readings blend Egyptian card wisdom and the Spanish deck tradition with professional sensitivity, respect and closeness. It is not witchcraft: it is the art of interpreting signs.',
      points: ['Sessions in English and Spanish', 'Online from any country', 'Professional secrecy and complete confidentiality'],
    },
    how: {
      kicker: 'How it works',
      title: 'Three simple steps',
      steps: [
        { n: '1', t: 'Message me', d: 'Tell me on WhatsApp what you need and which language you prefer.' },
        { n: '2', t: 'We schedule', d: 'We agree on the service, date and time in your own time zone.' },
        { n: '3', t: 'Receive your guidance', d: 'Your reading or ritual by video call, voice note or message, with clarity and warmth.' },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'What people usually ask',
      items: [
        { q: 'Is this witchcraft or fortune telling?', a: 'No. It is sensory, professional work of interpreting the cards. I do not guess: I translate their message so you have a foundation of what may happen and understand the reason behind what you live.' },
        { q: 'What is the difference between the Spanish deck and Egyptian tarot?', a: 'The Spanish deck looks at the short term, up to 6 months. Egyptian tarot goes deeper: it interprets present and future over a year or more, with a higher investment because of the depth of the work.' },
        { q: 'Is what I share confidential?', a: 'Completely. I keep professional secrecy and absolute respect for your life and privacy.' },
        { q: 'Do you work with people abroad?', a: 'Yes. All sessions are online and I adapt to your time zone.' },
        { q: 'Which languages do you speak?', a: 'English and Spanish.' },
        { q: 'What is a reading like?', a: 'By video call, voice note or messages, as you prefer. You receive clear interpretation and advice.' },
        { q: 'How do I pay?', a: 'I explain the available options on WhatsApp when we schedule.' },
      ],
    },
    final: {
      title: 'Ready for your first reading?',
      text: 'Message me today and let us start opening your path.',
      cta: 'Chat on WhatsApp',
      waMsg: 'Hello, I would like to book a session.',
    },
    footer: {
      disclaimer:
        'Services are spiritual and for entertainment purposes. They do not replace medical, legal or financial advice.',
      rights: 'All rights reserved.',
    },
    fab: 'Message me on WhatsApp',
  },
} as const;
