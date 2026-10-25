// Ilustraciones SVG de las cartas (baraja española y tarot egipcio).
// Todas usan un viewBox 200x300 para que escalen sin perder definición.

let uid = 0;
const nextId = (p: string) => `${p}${++uid}`;

const SERIF = "'Cormorant Garamond', Georgia, serif";

type Suit = 'oros' | 'copas' | 'espadas' | 'bastos';

const SUIT_COLOR: Record<Suit, string> = {
  oros: '#9a6a0a',
  copas: '#b3302a',
  espadas: '#2b5a88',
  bastos: '#3b7a3a',
};
const ROBE: Record<Suit, string> = {
  oros: '#2f5aa0',
  copas: '#7a2a6e',
  espadas: '#a8322a',
  bastos: '#b87a1a',
};
const SUIT_LABEL: Record<Suit, { es: string; en: string }> = {
  oros: { es: 'OROS', en: 'COINS' },
  copas: { es: 'COPAS', en: 'CUPS' },
  espadas: { es: 'ESPADAS', en: 'SWORDS' },
  bastos: { es: 'BASTOS', en: 'CLUBS' },
};

/* ───────────── Palos (centrados en 0,0, alto aprox. 52) ───────────── */

function suitSymbol(suit: Suit, gid: string): string {
  switch (suit) {
    case 'oros': {
      const rays = Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        return `<line x1="${(Math.cos(a) * 7.5).toFixed(2)}" y1="${(Math.sin(a) * 7.5).toFixed(2)}" x2="${(Math.cos(a) * 12.5).toFixed(2)}" y2="${(Math.sin(a) * 12.5).toFixed(2)}"/>`;
      }).join('');
      return `<g>
        <circle r="22" fill="url(#${gid}-gold)" stroke="#6e4800" stroke-width="1.8"/>
        <circle r="17.5" fill="none" stroke="#6e4800" stroke-width="1" stroke-dasharray="2 2.2"/>
        <circle r="14" fill="#f3cf62" stroke="#6e4800" stroke-width="1"/>
        <g stroke="#6e4800" stroke-width="1.3" stroke-linecap="round">${rays}</g>
        <circle r="5.5" fill="#fff0b0" stroke="#6e4800" stroke-width="1"/>
        <path d="M-14,-8 A16,16 0 0 1 4,-15" stroke="#fff8d6" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      </g>`;
    }
    case 'copas':
      return `<g stroke="#5e130f" stroke-width="1.6" stroke-linejoin="round">
        <path d="M-17,-22 H17 C17,-2 9,9 0,9 C-9,9 -17,-2 -17,-22 Z" fill="url(#${gid}-red)"/>
        <ellipse cx="0" cy="-22" rx="17" ry="4" fill="#e9695c"/>
        <path d="M-10,-16 C-11,-6 -6,2 0,4" fill="none" stroke="#ffc9c0" stroke-width="2" stroke-linecap="round" opacity=".7"/>
        <rect x="-3" y="9" width="6" height="11" fill="#d9a21b"/>
        <circle cx="0" cy="14.5" r="4.6" fill="#f3cf62"/>
        <path d="M-13,26 Q0,15 13,26 Z" fill="#d9a21b"/>
        <path d="M-13,26 H13" stroke="#6e4800"/>
      </g>`;
    case 'espadas':
      return `<g stroke="#1a2f48" stroke-width="1.5" stroke-linejoin="round">
        <path d="M0,-27 L6,-16 L6,9 L-6,9 L-6,-16 Z" fill="url(#${gid}-steel)"/>
        <path d="M0,-25 V8" stroke="#6f8aa6" stroke-width="1"/>
        <path d="M-14,9 Q0,4 14,9 L14,13 H-14 Z" fill="#d9a21b" stroke="#6e4800"/>
        <rect x="-3" y="13" width="6" height="12" rx="1.5" fill="#6b3b1a" stroke="#3a1d08"/>
        <circle cx="0" cy="27" r="4" fill="#f3cf62" stroke="#6e4800"/>
      </g>`;
    case 'bastos':
      return `<g stroke="#3a2210" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-6,-20 C-6,-28 6,-28 6,-20 L8,22 C8,28 -8,28 -8,22 Z" fill="url(#${gid}-green)"/>
        <circle cx="-8" cy="-8" r="4.2" fill="#8a5a2c"/>
        <circle cx="8.5" cy="4" r="4.4" fill="#8a5a2c"/>
        <circle cx="-8.5" cy="14" r="4" fill="#8a5a2c"/>
        <circle cx="-8" cy="-8" r="1.6" fill="#2a1608"/>
        <circle cx="8.5" cy="4" r="1.6" fill="#2a1608"/>
        <circle cx="-8.5" cy="14" r="1.6" fill="#2a1608"/>
        <path d="M-2,-18 C-3,-6 -3,10 -2,24" fill="none" stroke="#e8c79a" stroke-width="1.4" opacity=".6"/>
        <path d="M-6,-22 C-14,-30 -4,-36 0,-30 C4,-36 14,-30 6,-22" fill="#4f9a4a" stroke="#223f20" stroke-width="1.2"/>
      </g>`;
  }
}

function gradients(gid: string): string {
  return `<linearGradient id="${gid}-gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffe08a"/><stop offset=".5" stop-color="#d9a21b"/><stop offset="1" stop-color="#9a6a0a"/>
    </linearGradient>
    <linearGradient id="${gid}-red" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e2574b"/><stop offset="1" stop-color="#8e1f1a"/>
    </linearGradient>
    <linearGradient id="${gid}-steel" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e9f0f7"/><stop offset=".5" stop-color="#a9bfd3"/><stop offset="1" stop-color="#6b88a4"/>
    </linearGradient>
    <linearGradient id="${gid}-green" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#b9854a"/><stop offset="1" stop-color="#6a4220"/>
    </linearGradient>
    <linearGradient id="${gid}-paper" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbf3dc"/><stop offset="1" stop-color="#efdfb6"/>
    </linearGradient>`;
}

/* ───────────── Baraja española ───────────── */

const PIPS: Record<number, [number, number][]> = {
  1: [[100, 150]],
  2: [[100, 92], [100, 208]],
  3: [[100, 86], [100, 150], [100, 214]],
  5: [[68, 92], [132, 92], [100, 150], [68, 208], [132, 208]],
  7: [[68, 86], [132, 86], [100, 118], [68, 150], [132, 150], [68, 214], [132, 214]],
  10: [[66, 76], [134, 76], [100, 98], [66, 121], [134, 121], [66, 179], [134, 179], [100, 202], [66, 224], [134, 224]],
};

function figure(rank: 'sota' | 'rey', suit: Suit, gid: string): string {
  const king = rank === 'rey';
  const robe = ROBE[suit];
  const crown = king
    ? `<path d="M75,118 L79,90 L90,105 L100,86 L110,105 L121,90 L125,118 Z" fill="url(#${gid}-gold)" stroke="#6e4800" stroke-width="1.4" stroke-linejoin="round"/>
       <circle cx="100" cy="95" r="2.6" fill="#b3302a"/><circle cx="84" cy="106" r="2" fill="#2f5aa0"/><circle cx="116" cy="106" r="2" fill="#2f5aa0"/>`
    : `<path d="M74,126 C72,98 128,98 126,126 C112,115 88,115 74,126 Z" fill="${robe}" stroke="#2a1608" stroke-width="1.4"/>
       <path d="M122,108 C140,84 150,90 146,104 C142,98 134,100 126,112" fill="#f3cf62" stroke="#6e4800" stroke-width="1.2"/>`;
  const beard = king
    ? `<path d="M77,146 C79,182 121,182 123,146 C113,162 87,162 77,146 Z" fill="#5b3a1d" stroke="#2a1608" stroke-width="1.1"/>
       <path d="M88,150 Q100,158 112,150" stroke="#2a1608" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
    : `<path d="M90,152 Q100,157 110,152" stroke="#8a3b2a" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  return `
    <rect x="30" y="60" width="140" height="184" rx="6" fill="#f6e7bd" stroke="${SUIT_COLOR[suit]}" stroke-width="1.6"/>
    <rect x="30" y="152" width="140" height="92" fill="#e8d29a" opacity=".55"/>
    <path d="M42,244 C42,198 70,184 100,184 C130,184 158,198 158,244 Z" fill="${robe}" stroke="#2a1608" stroke-width="1.4"/>
    <path d="M78,186 L100,212 L122,186" fill="#f6e7bd" stroke="#2a1608" stroke-width="1.2" stroke-linejoin="round"/>
    <rect x="91" y="162" width="18" height="26" fill="#e3b484" stroke="#6b3b1a" stroke-width="1"/>
    <ellipse cx="100" cy="140" rx="24" ry="29" fill="#f1c9a0" stroke="#6b3b1a" stroke-width="1.3"/>
    <circle cx="91" cy="136" r="2.4" fill="#2a1608"/><circle cx="109" cy="136" r="2.4" fill="#2a1608"/>
    <path d="M85,129 Q91,125 96,129 M104,129 Q109,125 115,129" stroke="#3a2210" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <path d="M100,138 L97,148 H103" stroke="#a0623a" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${beard}
    ${crown}
    <g transform="translate(138 214) scale(.62)">${suitSymbol(suit, gid)}</g>`;
}

export function spanishCard(id: string, lang: 'es' | 'en' = 'es'): string {
  const [suitRaw, rankRaw] = id.split('-');
  const suit = suitRaw as Suit;
  const gid = nextId('sp');
  const color = SUIT_COLOR[suit];
  const isFigure = rankRaw === 'sota' || rankRaw === 'rey';
  const rank = isFigure ? 0 : Number(rankRaw);

  const label = isFigure
    ? rankRaw === 'sota'
      ? lang === 'es' ? 'SOTA' : 'PAGE'
      : lang === 'es' ? 'REY' : 'KING'
    : String(rank);
  const indexText = isFigure ? (rankRaw === 'sota' ? '10' : '12') : String(rank);

  let body: string;
  if (isFigure) {
    body = figure(rankRaw as 'sota' | 'rey', suit, gid);
  } else if (rank === 1) {
    const dots = Array.from({ length: 24 }, (_, i) => {
      const a = (i * Math.PI) / 12;
      return `<circle cx="${(100 + Math.cos(a) * 66).toFixed(1)}" cy="${(150 + Math.sin(a) * 66).toFixed(1)}" r="1.5" fill="${color}"/>`;
    }).join('');
    body = `<circle cx="100" cy="150" r="72" fill="none" stroke="${color}" stroke-width="1.2" opacity=".5"/>
      <circle cx="100" cy="150" r="60" fill="none" stroke="${color}" stroke-width=".8" opacity=".4"/>
      ${dots}
      <g transform="translate(100 150) scale(1.9)">${suitSymbol(suit, gid)}</g>`;
  } else {
    const s = rank >= 10 ? 0.78 : 0.95;
    body = PIPS[rank].map(([x, y]) => `<g transform="translate(${x} ${y}) scale(${s})">${suitSymbol(suit, gid)}</g>`).join('');
  }

  const corner = `<text x="24" y="38" font-family="${SERIF}" font-weight="700" font-size="22" text-anchor="middle" fill="${color}">${indexText}</text>
    <g transform="translate(24 56) scale(.36)">${suitSymbol(suit, gid)}</g>`;

  const name = isFigure
    ? `<text x="100" y="262" font-family="${SERIF}" font-weight="700" font-size="11" letter-spacing="3" text-anchor="middle" fill="${color}">${label} · ${SUIT_LABEL[suit][lang]}</text>`
    : `<text x="100" y="278" font-family="${SERIF}" font-weight="600" font-size="9" letter-spacing="3" text-anchor="middle" fill="${color}" opacity=".75">${SUIT_LABEL[suit][lang]}</text>`;

  return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" class="h-full w-full" role="img" aria-label="${label} ${SUIT_LABEL[suit][lang]}">
    <defs>${gradients(gid)}</defs>
    <rect width="200" height="300" rx="14" fill="#cdb98c"/>
    <rect x="2.5" y="2.5" width="195" height="295" rx="12" fill="url(#${gid}-paper)"/>
    <rect x="9" y="9" width="182" height="282" rx="8" fill="none" stroke="${color}" stroke-width="1.6"/>
    <rect x="13" y="13" width="174" height="274" rx="6" fill="none" stroke="${color}" stroke-width=".6" opacity=".7"/>
    ${corner}
    <g transform="rotate(180 100 150)">${corner}</g>
    ${body}
    ${name}
  </svg>`;
}

/* ───────────── Tarot egipcio ───────────── */

const GOLD = '#e8c46a';
const GOLD_DEEP = '#b98a24';

interface Egy {
  numeral: string;
  es: string;
  en: string;
  emblem: (g: string) => string;
}

const wing = `<path d="M10,-6 C30,-30 62,-30 72,-8 C60,-12 54,-4 58,6 C48,0 42,8 44,18 C35,10 26,16 24,26 C18,14 10,12 10,-6 Z" fill="#f4e2a6" stroke="${GOLD_DEEP}" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M16,0 C34,-18 56,-18 64,-6 M18,8 C34,-4 50,0 54,6 M20,16 C32,8 42,12 42,18" fill="none" stroke="${GOLD_DEEP}" stroke-width="1" stroke-linecap="round"/>`;

const EMBLEM: Record<string, Egy> = {
  isis: {
    numeral: 'II', es: 'ISIS', en: 'ISIS',
    emblem: () => `
      ${wing}<g transform="scale(-1 1)">${wing}</g>
      <circle cx="0" cy="-34" r="9" fill="#d9532f" stroke="${GOLD}" stroke-width="1.6"/>
      <path d="M-18,-30 C-24,-46 -10,-52 -4,-40 M18,-30 C24,-46 10,-52 4,-40" fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round"/>
      <ellipse cx="0" cy="-10" rx="9" ry="12" fill="none" stroke="${GOLD}" stroke-width="3.2"/>
      <path d="M0,2 V44 M-14,22 H14" stroke="${GOLD}" stroke-width="3.6" stroke-linecap="round"/>`,
  },
  osiris: {
    numeral: 'XX', es: 'OSIRIS', en: 'OSIRIS',
    emblem: () => `
      <path d="M-9,-8 C-11,-32 -5,-50 0,-56 C5,-50 11,-32 9,-8 Z" fill="#f4ecd2" stroke="${GOLD}" stroke-width="1.8" stroke-linejoin="round"/>
      <ellipse cx="-19" cy="-26" rx="5" ry="16" transform="rotate(-18 -19 -26)" fill="#2fa59b" stroke="${GOLD}" stroke-width="1.4"/>
      <ellipse cx="19" cy="-26" rx="5" ry="16" transform="rotate(18 19 -26)" fill="#2fa59b" stroke="${GOLD}" stroke-width="1.4"/>
      <ellipse cx="0" cy="-2" rx="16" ry="10" fill="#7bd0c4" stroke="${GOLD}" stroke-width="1.4"/>
      <path d="M-34,40 L22,6 C32,-2 40,10 28,14" fill="none" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>
      <path d="M34,40 L-20,6" fill="none" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>
      <g fill="${GOLD}"><circle cx="-26" cy="0" r="3.4"/><circle cx="-31" cy="-9" r="3.4"/><circle cx="-36" cy="-18" r="3.4"/></g>`,
  },
  anubis: {
    numeral: 'XIII', es: 'ANUBIS', en: 'ANUBIS',
    emblem: () => `
      <path d="M-32,38 L-24,-4 L-28,-44 L-10,-16 C-4,-22 4,-22 10,-16 L30,2 L44,6 L44,16 L20,22 L12,36 Z" fill="#1c1a24" stroke="${GOLD}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M-24,-4 L-20,-30 L-12,-12" fill="#3a2f55" stroke="${GOLD}" stroke-width="1.2"/>
      <path d="M-4,4 Q4,0 12,6" fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="6" cy="6" r="2.4" fill="${GOLD}"/>
      <circle cx="42" cy="8" r="2.6" fill="${GOLD}"/>
      <path d="M-34,40 C-18,52 18,52 34,40" fill="none" stroke="${GOLD}" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M-26,46 C-14,56 14,56 26,46" fill="none" stroke="#2fa59b" stroke-width="2.6" stroke-linecap="round"/>`,
  },
  horus: {
    numeral: 'VII', es: 'HORUS', en: 'HORUS',
    emblem: () => `
      <path d="M-50,0 Q0,-38 50,0 Q0,32 -50,0 Z" fill="#f8f2df" stroke="${GOLD}" stroke-width="2.4" stroke-linejoin="round"/>
      <circle cx="2" cy="-1" r="15" fill="#2f66b0" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="2" cy="-1" r="7" fill="#101a3a"/>
      <circle cx="-2" cy="-5" r="2.4" fill="#fff"/>
      <path d="M-52,-16 Q0,-56 52,-16" fill="none" stroke="${GOLD}" stroke-width="5" stroke-linecap="round"/>
      <path d="M-8,20 V44 Q-8,52 -22,50" fill="none" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>
      <path d="M14,20 Q24,44 44,42 Q56,40 50,26 Q46,18 38,24" fill="none" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>`,
  },
  ra: {
    numeral: 'XIX', es: 'RA', en: 'RA',
    emblem: () => {
      const rays = Array.from({ length: 16 }, (_, i) => {
        const a = (i * Math.PI) / 8;
        const long = i % 2 === 0;
        const r1 = 26, r2 = long ? 54 : 42;
        const x1 = Math.cos(a - 0.12) * r1, y1 = Math.sin(a - 0.12) * r1;
        const x2 = Math.cos(a + 0.12) * r1, y2 = Math.sin(a + 0.12) * r1;
        return `<path d="M${x1.toFixed(1)},${y1.toFixed(1)} L${(Math.cos(a) * r2).toFixed(1)},${(Math.sin(a) * r2).toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${long ? GOLD : '#f6dd94'}" stroke="${GOLD_DEEP}" stroke-width=".8"/>`;
      }).join('');
      return `${rays}
        <circle r="26" fill="#e8742d" stroke="${GOLD}" stroke-width="2.4"/>
        <circle r="19" fill="#f6a23c" stroke="${GOLD}" stroke-width="1.2"/>
        <circle r="10" fill="#ffe08a"/>
        <path d="M-6,34 C-14,44 -4,52 4,46" fill="none" stroke="#2fa59b" stroke-width="0"/>`;
    },
  },
  maat: {
    numeral: 'XI', es: 'MAAT', en: 'MAAT',
    emblem: () => `
      <path d="M0,-52 C16,-38 18,-8 0,14 C-18,-8 -16,-38 0,-52 Z" fill="#f8f2df" stroke="${GOLD}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M0,-50 V14" stroke="${GOLD_DEEP}" stroke-width="1.4"/>
      <path d="M0,-40 L10,-34 M0,-30 L12,-22 M0,-20 L11,-12 M0,-40 L-10,-34 M0,-30 L-12,-22 M0,-20 L-11,-12" stroke="${GOLD_DEEP}" stroke-width="1" stroke-linecap="round"/>
      <path d="M-42,26 H42 M0,14 V26" stroke="${GOLD}" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M-42,26 L-52,46 M-42,26 L-32,46 M42,26 L32,46 M42,26 L52,46" stroke="${GOLD}" stroke-width="1.4"/>
      <path d="M-54,46 Q-42,58 -30,46 Z M30,46 Q42,58 54,46 Z" fill="${GOLD}" stroke="${GOLD_DEEP}" stroke-width="1.2"/>`,
  },
  bastet: {
    numeral: 'XVII', es: 'BASTET', en: 'BASTET',
    emblem: () => `
      <path d="M-34,-4 L-30,-44 L-8,-26 Q0,-29 8,-26 L30,-44 L34,-4 C34,30 14,42 0,42 C-14,42 -34,30 -34,-4 Z" fill="#26222f" stroke="${GOLD}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M-26,-12 L-24,-34 L-12,-24 M26,-12 L24,-34 L12,-24" fill="#c26a8a" stroke="none" opacity=".8"/>
      <path d="M-22,0 Q-14,-8 -6,0 Q-14,6 -22,0 Z M6,0 Q14,-8 22,0 Q14,6 6,0 Z" fill="${GOLD}" stroke="${GOLD_DEEP}" stroke-width="1"/>
      <path d="M-14,0 V0 M14,0 V0" stroke="#101010" stroke-width="3" stroke-linecap="round"/>
      <path d="M-3,12 H3 L0,17 Z" fill="#c26a8a"/>
      <path d="M0,17 V22 M0,22 Q-6,28 -12,24 M0,22 Q6,28 12,24" fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M-36,10 L-58,6 M-36,16 L-58,18 M36,10 L58,6 M36,16 L58,18" stroke="${GOLD}" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M-26,34 C-12,50 12,50 26,34" fill="none" stroke="#2fa59b" stroke-width="3.4" stroke-linecap="round"/>`,
  },
  thoth: {
    numeral: 'I', es: 'THOT', en: 'THOTH',
    emblem: () => `
      <circle cx="0" cy="-24" r="17" fill="#f8f2df" stroke="${GOLD}" stroke-width="2.2"/>
      <circle cx="6" cy="-26" r="15" fill="#1c2a5c"/>
      <path d="M-26,-20 C-10,-50 22,-52 34,-34" fill="none" stroke="${GOLD}" stroke-width="0"/>
      <path d="M-40,8 C-30,-6 -10,0 -4,12 C6,28 22,22 30,10 C34,4 44,6 40,16 C34,34 6,44 -12,32 C-24,24 -34,24 -40,8 Z" fill="#f8f2df" stroke="${GOLD}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M-4,12 C-12,16 -24,12 -40,8" fill="none" stroke="${GOLD_DEEP}" stroke-width="1.2"/>
      <circle cx="-22" cy="12" r="2" fill="#1c2a5c"/>
      <path d="M14,30 L50,-4 M50,-4 L54,-14 L44,-8 Z" stroke="${GOLD}" stroke-width="3" fill="${GOLD}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M-38,40 H20" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round"/>`,
  },
};

function corner(x: number, y: number, flipX: number, flipY: number): string {
  return `<g transform="translate(${x} ${y}) scale(${flipX} ${flipY})" fill="none" stroke="${GOLD}" stroke-width="1.4" stroke-linecap="round">
    <path d="M0,22 C0,8 8,0 22,0"/><path d="M5,22 C5,12 12,5 22,5" opacity=".6"/><circle cx="4" cy="4" r="2.4" fill="${GOLD}" stroke="none"/>
  </g>`;
}

export function egyptianCard(id: string, lang: 'es' | 'en' = 'es'): string {
  const c = EMBLEM[id];
  const gid = nextId('eg');
  const name = c[lang];
  return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" class="h-full w-full" role="img" aria-label="${name}">
    <defs>
      <linearGradient id="${gid}-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1d2d63"/><stop offset=".55" stop-color="#2a2552"/><stop offset="1" stop-color="#1a1633"/>
      </linearGradient>
      <radialGradient id="${gid}-glow" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="#f3cf62" stop-opacity=".55"/><stop offset=".6" stop-color="#e8742d" stop-opacity=".12"/><stop offset="1" stop-color="#e8742d" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="${gid}-band" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#8a5f12"/><stop offset=".5" stop-color="#f0cf75"/><stop offset="1" stop-color="#8a5f12"/>
      </linearGradient>
      <pattern id="${gid}-pat" width="14" height="14" patternUnits="userSpaceOnUse">
        <path d="M7,1 L13,7 L7,13 L1,7 Z" fill="none" stroke="${GOLD}" stroke-width=".5" opacity=".18"/>
      </pattern>
    </defs>
    <rect width="200" height="300" rx="14" fill="#8a5f12"/>
    <rect x="3" y="3" width="194" height="294" rx="12" fill="url(#${gid}-bg)"/>
    <rect x="3" y="3" width="194" height="294" rx="12" fill="url(#${gid}-pat)"/>
    <rect x="9" y="9" width="182" height="282" rx="8" fill="none" stroke="${GOLD}" stroke-width="1.8"/>
    <rect x="14" y="14" width="172" height="272" rx="5" fill="none" stroke="${GOLD}" stroke-width=".7" opacity=".7"/>
    ${corner(14, 14, 1, 1)}${corner(186, 14, -1, 1)}${corner(14, 286, 1, -1)}${corner(186, 286, -1, -1)}
    <text x="100" y="40" font-family="${SERIF}" font-weight="700" font-size="17" letter-spacing="4" text-anchor="middle" fill="${GOLD}">${c.numeral}</text>
    <path d="M60,48 H140" stroke="${GOLD}" stroke-width=".8"/><circle cx="100" cy="48" r="2" fill="${GOLD}"/>
    <circle cx="100" cy="150" r="74" fill="url(#${gid}-glow)"/>
    <circle cx="100" cy="150" r="66" fill="none" stroke="${GOLD}" stroke-width="1.2" opacity=".8"/>
    <circle cx="100" cy="150" r="61" fill="none" stroke="${GOLD}" stroke-width=".6" stroke-dasharray="1.5 3.5" opacity=".9"/>
    <g fill="${GOLD}" opacity=".85">
      <circle cx="40" cy="96" r="1.2"/><circle cx="160" cy="104" r="1.4"/><circle cx="34" cy="196" r="1.4"/><circle cx="168" cy="200" r="1.2"/>
      <circle cx="52" cy="74" r="1"/><circle cx="148" cy="76" r="1"/>
    </g>
    <g transform="translate(100 150) scale(.98)">${c.emblem(gid)}</g>
    <rect x="30" y="238" width="140" height="30" rx="4" fill="url(#${gid}-band)" stroke="#6e4800" stroke-width="1"/>
    <text x="100" y="259" font-family="${SERIF}" font-weight="700" font-size="19" letter-spacing="5" text-anchor="middle" fill="#2a1a05">${name}</text>
  </svg>`;
}

/* ───────────── Reversos ───────────── */

export function cardBack(deck: 'egyptian' | 'spanish'): string {
  const gid = nextId('bk');
  if (deck === 'egyptian') {
    return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" class="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="${gid}-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b6c70"/><stop offset="1" stop-color="#241f46"/></linearGradient>
        <pattern id="${gid}-p" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10,2 L18,10 L10,18 L2,10 Z" fill="none" stroke="${GOLD}" stroke-width=".7" opacity=".45"/>
          <circle cx="10" cy="10" r="1.2" fill="${GOLD}" opacity=".5"/>
        </pattern>
      </defs>
      <rect width="200" height="300" rx="14" fill="#8a5f12"/>
      <rect x="3" y="3" width="194" height="294" rx="12" fill="url(#${gid}-bg)"/>
      <rect x="3" y="3" width="194" height="294" rx="12" fill="url(#${gid}-p)"/>
      <rect x="12" y="12" width="176" height="276" rx="8" fill="none" stroke="${GOLD}" stroke-width="1.8"/>
      <rect x="18" y="18" width="164" height="264" rx="5" fill="none" stroke="${GOLD}" stroke-width=".7"/>
      <circle cx="100" cy="150" r="46" fill="#1a1633" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="100" cy="150" r="40" fill="none" stroke="${GOLD}" stroke-width=".8" stroke-dasharray="2 3"/>
      <ellipse cx="100" cy="136" rx="10" ry="13" fill="none" stroke="${GOLD}" stroke-width="3.6"/>
      <path d="M100,149 V186 M86,166 H114" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" class="h-full w-full" aria-hidden="true">
    <defs>
      <pattern id="${gid}-p" width="16" height="16" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="#8e1f1a"/>
        <path d="M8,0 L16,8 L8,16 L0,8 Z" fill="#b3302a"/>
        <circle cx="8" cy="8" r="2.2" fill="#f3cf62"/>
      </pattern>
    </defs>
    <rect width="200" height="300" rx="14" fill="#cdb98c"/>
    <rect x="3" y="3" width="194" height="294" rx="12" fill="#fbf3dc"/>
    <rect x="12" y="12" width="176" height="276" rx="6" fill="url(#${gid}-p)" stroke="#5e130f" stroke-width="1.6"/>
    <rect x="30" y="86" width="140" height="128" rx="6" fill="#fbf3dc" stroke="#5e130f" stroke-width="1.6"/>
    <circle cx="100" cy="150" r="44" fill="#8e1f1a" stroke="#5e130f" stroke-width="1.6"/>
    <circle cx="100" cy="150" r="34" fill="#f3cf62" stroke="#6e4800" stroke-width="1.4"/>
    <circle cx="100" cy="150" r="14" fill="#b3302a" stroke="#5e130f" stroke-width="1.2"/>
  </svg>`;
}
