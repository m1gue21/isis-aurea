export type Lang = 'es' | 'en';

export interface Service {
  icon: string;
  title: string;
  desc: string;
  wa: string;
}

export interface Card {
  glyph: string;
  name: string;
  meaning: string;
}

export const content = {
  es: {
    meta: {
      title: 'Isis Aurea · Lecturas de cartas egipcias y españolas',
      description:
        'Lecturas de cartas egipcias y españolas, baños espirituales, atracción de suerte, amor y protección contra la envidia. Atención online en español e inglés.',
    },
    nav: { services: 'Servicios', cards: 'Cartas', about: 'Guía', how: 'Cómo funciona', faq: 'Preguntas', cta: 'Escríbeme' },
    hero: {
      kicker: 'Lecturas · Rituales · Energía',
      title: 'La luz que buscas ya te está esperando',
      text: 'Lecturas de cartas egipcias y españolas, baños espirituales y rituales para abrir caminos, atraer amor y suerte, y alejar la envidia. Atención online para todo el mundo.',
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
      positions: ['Pasado', 'Presente', 'Futuro'],
      cta: 'Quiero la lectura completa',
      note: 'Esto es un adelanto simbólico. Tu lectura real es personal.',
      waMsg: 'Hola, saqué mis cartas en la página y quiero la lectura completa.',
      decks: {
        egyptian: [
          { glyph: '☥', name: 'Isis', meaning: 'Intuición, protección y magia propia.' },
          { glyph: '☾', name: 'Osiris', meaning: 'Renacimiento y un nuevo ciclo.' },
          { glyph: '🐺', name: 'Anubis', meaning: 'Guía en el tránsito; suelta lo que ya terminó.' },
          { glyph: '𓂀', name: 'Horus', meaning: 'Visión clara y victoria.' },
          { glyph: '☀', name: 'Ra', meaning: 'Energía, éxito y vitalidad.' },
          { glyph: '⚖', name: 'Maat', meaning: 'Equilibrio, verdad y justicia.' },
          { glyph: '🐈', name: 'Bastet', meaning: 'Protección del hogar y alegría.' },
          { glyph: '✎', name: 'Thot', meaning: 'Sabiduría y mensajes importantes.' },
        ] as Card[],
        spanish: [
          { glyph: '🪙', name: 'As de Oros', meaning: 'Nueva oportunidad de prosperidad.' },
          { glyph: '🍷', name: 'As de Copas', meaning: 'Amor nuevo o renovado.' },
          { glyph: '🍷', name: '3 de Copas', meaning: 'Celebración, amistad y alegría.' },
          { glyph: '⚔', name: 'Caballo de Espadas', meaning: 'Cambios rápidos; actúa con claridad.' },
          { glyph: '🌿', name: 'Rey de Bastos', meaning: 'Liderazgo y confianza en ti.' },
          { glyph: '🪙', name: '2 de Oros', meaning: 'Equilibrio en tus finanzas.' },
          { glyph: '🍷', name: 'Sota de Copas', meaning: 'Un mensaje o noticia afectiva.' },
          { glyph: '🌿', name: '5 de Bastos', meaning: 'Competencia o tensión que se resuelve.' },
        ] as Card[],
      },
    },
    about: {
      kicker: 'Tu guía',
      title: 'Una voz cálida para momentos de claridad',
      text: 'Desde hace años acompaño a personas de distintos países a encontrar respuestas, soltar lo que pesa y abrir caminos. Mi lectura une la sabiduría de las cartas egipcias y la tradición de la baraja española con intuición, respeto y cercanía.',
      points: ['Atención en español e inglés', 'Consultas online desde cualquier país', 'Confidencialidad total'],
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
        'Egyptian and Spanish card readings, spiritual baths, luck and love rituals, and protection from envy. Online sessions in English and Spanish, worldwide.',
    },
    nav: { services: 'Services', cards: 'Cards', about: 'Your guide', how: 'How it works', faq: 'FAQ', cta: 'Message me' },
    hero: {
      kicker: 'Readings · Rituals · Energy',
      title: 'The light you are looking for is already waiting for you',
      text: 'Egyptian and Spanish card readings, spiritual baths and rituals to open paths, attract love and luck, and keep envy away. Online sessions for people all over the world.',
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
      positions: ['Past', 'Present', 'Future'],
      cta: 'I want the full reading',
      note: 'This is a symbolic preview. Your real reading is personal.',
      waMsg: 'Hello, I drew my cards on the website and I want the full reading.',
      decks: {
        egyptian: [
          { glyph: '☥', name: 'Isis', meaning: 'Intuition, protection and your own magic.' },
          { glyph: '☾', name: 'Osiris', meaning: 'Rebirth and a new cycle.' },
          { glyph: '🐺', name: 'Anubis', meaning: 'A guide through transition; release what has ended.' },
          { glyph: '𓂀', name: 'Horus', meaning: 'Clear vision and victory.' },
          { glyph: '☀', name: 'Ra', meaning: 'Energy, success and vitality.' },
          { glyph: '⚖', name: 'Maat', meaning: 'Balance, truth and justice.' },
          { glyph: '🐈', name: 'Bastet', meaning: 'Protection of the home and joy.' },
          { glyph: '✎', name: 'Thoth', meaning: 'Wisdom and important messages.' },
        ] as Card[],
        spanish: [
          { glyph: '🪙', name: 'Ace of Coins', meaning: 'A new opportunity for prosperity.' },
          { glyph: '🍷', name: 'Ace of Cups', meaning: 'New or renewed love.' },
          { glyph: '🍷', name: '3 of Cups', meaning: 'Celebration, friendship and joy.' },
          { glyph: '⚔', name: 'Knight of Swords', meaning: 'Fast changes; act with clarity.' },
          { glyph: '🌿', name: 'King of Clubs', meaning: 'Leadership and trust in yourself.' },
          { glyph: '🪙', name: '2 of Coins', meaning: 'Balance in your finances.' },
          { glyph: '🍷', name: 'Page of Cups', meaning: 'A message or emotional news.' },
          { glyph: '🌿', name: '5 of Clubs', meaning: 'Competition or tension that resolves.' },
        ] as Card[],
      },
    },
    about: {
      kicker: 'Your guide',
      title: 'A warm voice for moments of clarity',
      text: 'For years I have been helping people from many countries find answers, let go of what weighs on them and open new paths. My readings blend Egyptian card wisdom and the Spanish deck tradition with intuition, respect and closeness.',
      points: ['Sessions in English and Spanish', 'Online from any country', 'Complete confidentiality'],
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
