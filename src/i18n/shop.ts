import type { Lang } from './content';

export interface Product {
  name: string;
  desc: string;
  /** Precio ya formateado, por ejemplo "$89.900 COP". Vacío = "consultar precio". */
  price?: string;
  /** Ruta de la foto del producto, por ejemplo "/images/shop/amatista.jpg". Si falta, se muestra el símbolo. */
  img?: string;
}

export interface Category {
  id: string;
  icon: string;
  name: string;
  blurb: string;
  /** Foto ancha de la categoría (banner), por ejemplo "/images/shop/stones.jpg". Opcional. */
  image?: string;
  products: Product[];
}

// Para añadir un precio, basta con rellenar `price` en el producto.
// Para añadir un producto, copiar una línea y cambiar los textos.
export const shop = {
  es: {
    nav: 'Tienda',
    kicker: 'Tienda esotérica',
    title: 'Objetos con intención para tu camino',
    text: 'Piedras, inciensos, velas, amuletos y kits espirituales seleccionados con cuidado. Pide por WhatsApp y coordinamos disponibilidad, pago y entrega.',
    ask: 'Pedir por WhatsApp',
    consult: 'Consultar precio',
    note: 'Los productos tienen un uso simbólico y espiritual. No sustituyen tratamientos médicos ni garantizan resultados.',
    waMsg: 'Hola, me interesa este producto de la tienda: {product}. ¿Está disponible y cuál es el precio y el envío?',
    categories: [
      {
        id: 'stones',
        image: '/images/og.jpg',
        icon: '◆',
        name: 'Piedras y cuarzos',
        blurb: 'Minerales con significado simbólico tradicional.',
        products: [
          { name: 'Amatista', desc: 'Asociada a la calma, la intuición y el descanso mental.' },
          { name: 'Cuarzo rosado', desc: 'La piedra del amor propio y la ternura.' },
          { name: 'Citrino', desc: 'Simboliza abundancia, alegría y buena energía.' },
          { name: 'Turmalina negra', desc: 'Tradicionalmente usada como piedra de protección.' },
          { name: 'Ojo de tigre', desc: 'Representa confianza, fuerza y determinación.' },
          { name: 'Selenita', desc: 'Usada para limpiar y armonizar otras piedras y espacios.' },
        ],
      },
      {
        id: 'incense',
        image: '/images/protection.jpg',
        icon: '≈',
        name: 'Inciensos y sahumerios',
        blurb: 'Aromas para limpiar, relajar y armonizar tu espacio.',
        products: [
          { name: 'Palo santo', desc: 'Madera aromática para ambientes y rituales de limpieza.' },
          { name: 'Salvia blanca', desc: 'Atado de hierba para sahumar y renovar el ambiente.' },
          { name: 'Inciensos aromáticos', desc: 'Varillas y conos en distintas fragancias.' },
          { name: 'Sahumerios y atados de hierbas', desc: 'Mezclas de hierbas para ceremonias y limpieza.' },
          { name: 'Aromas para espacios', desc: 'Productos aromáticos para hogar, altar y negocio.' },
        ],
      },
      {
        id: 'candles',
        image: '/images/candles.jpg',
        icon: '♨',
        name: 'Velas espirituales',
        blurb: 'Para acompañar tus intenciones y rituales.',
        products: [
          { name: 'Velas de colores', desc: 'Cada color acompaña una intención: amor, suerte, calma, protección.' },
          { name: 'Velas aromáticas', desc: 'Fragancias suaves para relajar y ambientar.' },
          { name: 'Velas decorativas', desc: 'Para tu altar o rincón especial.' },
          { name: 'Velas para rituales', desc: 'Pensadas para ceremonias de intención y agradecimiento.' },
        ],
      },
      {
        id: 'amulets',
        image: '/images/about.jpg',
        icon: '𓂀',
        name: 'Amuletos y accesorios',
        blurb: 'Piezas de protección simbólica para llevar contigo.',
        products: [
          { name: 'Pulseras de piedras naturales', desc: 'Con piedras seleccionadas según tu intención.' },
          { name: 'Pulsera ojo turco', desc: 'El clásico amuleto contra la envidia y el mal de ojo.' },
          { name: 'Amuletos', desc: 'Piezas de protección y buena suerte.' },
          { name: 'Dijes', desc: 'Para cadenas, llaveros o pulseras.' },
          { name: 'Accesorios de protección', desc: 'Símbolos de protección para llevar o colocar en casa.' },
        ],
      },
      {
        id: 'tools',
        image: '/images/reading-spanish.jpg',
        icon: '☥',
        name: 'Cartas y herramientas',
        blurb: 'Para aprender y practicar el arte de las cartas.',
        products: [
          { name: 'Baraja española', desc: 'Baraja tradicional de 40 cartas para lecturas.' },
          { name: 'Tarot egipcio', desc: 'Baraja inspirada en los símbolos del antiguo Egipto.' },
          { name: 'Cartas de oráculo', desc: 'Mensajes e inspiración para tu día a día.' },
          { name: 'Péndulos', desc: 'Herramientas de consulta e intuición.' },
        ],
      },
      {
        id: 'kits',
        image: '/images/reading-egyptian.jpg',
        icon: '✦',
        name: 'Kits espirituales',
        blurb: 'Un regalo con intención, listo en una caja bonita.',
        products: [
          {
            name: 'Kit de prosperidad y abundancia',
            desc: 'Un regalo espiritual en una caja bonita, con elementos simbólicos de prosperidad y abundancia.',
            price: '$89.900 COP',
          },
          { name: 'Kit de protección', desc: 'Elementos simbólicos de protección y cuidado energético.' },
          { name: 'Kit de armonización', desc: 'Para crear calma y equilibrio en tu espacio.' },
          { name: 'Kit de amor propio', desc: 'Un detalle para reconectar contigo.' },
          { name: 'Kit de limpieza energética', desc: 'Para renovar tu hogar o tu espacio de trabajo.' },
        ],
      },
    ] as Category[],
  },
  en: {
    nav: 'Shop',
    kicker: 'Spiritual shop',
    title: 'Objects with intention for your path',
    text: 'Stones, incense, candles, amulets and spiritual kits carefully selected. Order on WhatsApp and we will arrange availability, payment and delivery.',
    ask: 'Order on WhatsApp',
    consult: 'Ask for price',
    note: 'Products are for symbolic and spiritual use. They do not replace medical treatment or guarantee results.',
    waMsg: 'Hello, I am interested in this product from the shop: {product}. Is it available, and what are the price and shipping?',
    categories: [
      {
        id: 'stones',
        image: '/images/og.jpg',
        icon: '◆',
        name: 'Stones & crystals',
        blurb: 'Minerals with traditional symbolic meaning.',
        products: [
          { name: 'Amethyst', desc: 'Associated with calm, intuition and mental rest.' },
          { name: 'Rose quartz', desc: 'The stone of self-love and tenderness.' },
          { name: 'Citrine', desc: 'Symbolizes abundance, joy and good energy.' },
          { name: 'Black tourmaline', desc: 'Traditionally used as a protection stone.' },
          { name: 'Tiger’s eye', desc: 'Represents confidence, strength and determination.' },
          { name: 'Selenite', desc: 'Used to cleanse and harmonize other stones and spaces.' },
        ],
      },
      {
        id: 'incense',
        image: '/images/protection.jpg',
        icon: '≈',
        name: 'Incense & smudging',
        blurb: 'Scents to cleanse, relax and harmonize your space.',
        products: [
          { name: 'Palo santo', desc: 'Aromatic wood for spaces and cleansing rituals.' },
          { name: 'White sage', desc: 'Herb bundle to smudge and refresh the atmosphere.' },
          { name: 'Aromatic incense', desc: 'Sticks and cones in different fragrances.' },
          { name: 'Smudge & herb bundles', desc: 'Herb blends for ceremonies and cleansing.' },
          { name: 'Room aromas', desc: 'Aromatic products for home, altar and business.' },
        ],
      },
      {
        id: 'candles',
        image: '/images/candles.jpg',
        icon: '♨',
        name: 'Spiritual candles',
        blurb: 'To accompany your intentions and rituals.',
        products: [
          { name: 'Colored candles', desc: 'Each color supports an intention: love, luck, calm, protection.' },
          { name: 'Scented candles', desc: 'Soft fragrances to relax and set the mood.' },
          { name: 'Decorative candles', desc: 'For your altar or special corner.' },
          { name: 'Ritual candles', desc: 'Made for ceremonies of intention and gratitude.' },
        ],
      },
      {
        id: 'amulets',
        image: '/images/about.jpg',
        icon: '𓂀',
        name: 'Amulets & accessories',
        blurb: 'Symbolic protection pieces to carry with you.',
        products: [
          { name: 'Natural stone bracelets', desc: 'With stones chosen for your intention.' },
          { name: 'Evil eye bracelet', desc: 'The classic amulet against envy and the evil eye.' },
          { name: 'Amulets', desc: 'Pieces for protection and good luck.' },
          { name: 'Charms', desc: 'For chains, keychains or bracelets.' },
          { name: 'Protection accessories', desc: 'Protective symbols to wear or place at home.' },
        ],
      },
      {
        id: 'tools',
        image: '/images/reading-spanish.jpg',
        icon: '☥',
        name: 'Cards & tools',
        blurb: 'To learn and practice the art of the cards.',
        products: [
          { name: 'Spanish deck', desc: 'Traditional 40-card deck for readings.' },
          { name: 'Egyptian tarot', desc: 'A deck inspired by the symbols of ancient Egypt.' },
          { name: 'Oracle cards', desc: 'Messages and inspiration for your day.' },
          { name: 'Pendulums', desc: 'Tools for consultation and intuition.' },
        ],
      },
      {
        id: 'kits',
        image: '/images/reading-egyptian.jpg',
        icon: '✦',
        name: 'Spiritual kits',
        blurb: 'A gift with intention, ready in a beautiful box.',
        products: [
          {
            name: 'Prosperity & abundance kit',
            desc: 'A spiritual gift in a beautiful box, with symbolic items of prosperity and abundance.',
            price: '$89.900 COP',
          },
          { name: 'Protection kit', desc: 'Symbolic items for protection and energetic care.' },
          { name: 'Harmony kit', desc: 'To create calm and balance in your space.' },
          { name: 'Self-love kit', desc: 'A gift to reconnect with yourself.' },
          { name: 'Energy cleansing kit', desc: 'To renew your home or workspace.' },
        ],
      },
    ] as Category[],
  },
} satisfies Record<Lang, unknown>;

/**
 * Fotos provisionales por producto, en el mismo orden que `products` de cada categoría
 * (válido para español e inglés). Fuente de las fotos de stock: docs/CREDITOS-IMAGENES.md.
 */
export const productImages: Record<string, string[]> = {
  stones: ['amatista', 'cuarzo-rosado', 'citrino', 'turmalina', 'ojo-tigre', 'selenita'],
  incense: ['palo-santo', 'salvia', 'incienso', 'sahumerio', 'aromas'],
  candles: ['vela-colores', 'vela-aromatica', 'vela-decorativa', 'vela-ritual'],
  amulets: ['pulsera-piedras', 'pulsera-ojo-turco', 'amuleto', 'dije', 'proteccion'],
  tools: ['baraja-espanola', 'tarot-egipcio', 'oraculo', 'pendulo'],
  kits: ['kit-prosperidad', 'kit-proteccion', 'kit-armonizacion', 'kit-amor', 'kit-limpieza'],
};
