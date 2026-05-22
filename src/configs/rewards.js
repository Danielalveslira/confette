// ─────────────────────────────────────────────────────────────────────────────
// CATÁLOGO DE CONFIGURAÇÕES — react-rewards
//
// Para usar qualquer variante no seu projeto:
//   import { useReward } from 'react-rewards';
//   import { CONFETTI_FIRE } from './configs/rewards';
//
//   const { reward } = useReward(CONFETTI_FIRE.id, CONFETTI_FIRE.type, CONFETTI_FIRE.config);
//
//   <button onClick={reward}>
//     <span id={CONFETTI_FIRE.id} />   ← âncora: ponto de origem da animação
//   </button>
// ─────────────────────────────────────────────────────────────────────────────

// ── CONFETTI ──────────────────────────────────────────────────────────────────

export const CONFETTI_CLASSIC = {
  id: 'confetti-classic',
  type: 'confetti',
  emoji: '🎉',
  label: 'Clássico',
  config: {
    elementCount: 80,
    spread: 60,
    startVelocity: 40,
    decay: 0.94,
    lifetime: 200,
    elementSize: 8,
    colors: ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'],
  },
};

export const CONFETTI_FIRE = {
  id: 'confetti-fire',
  type: 'confetti',
  emoji: '🔥',
  label: 'Fogo',
  config: {
    elementCount: 100,
    spread: 50,
    startVelocity: 45,
    decay: 0.94,
    lifetime: 200,
    elementSize: 9,
    colors: ['#FF4500', '#FF6B00', '#FFB300', '#FF2D55', '#FF9500'],
  },
};

export const CONFETTI_EXPLOSION = {
  id: 'confetti-explosion',
  type: 'confetti',
  emoji: '💥',
  label: 'Explosão',
  config: {
    elementCount: 150,
    spread: 160,
    startVelocity: 55,
    decay: 0.92,
    lifetime: 220,
    elementSize: 10,
    colors: ['#FF0080', '#7928CA', '#0070F3', '#00DFD8', '#F5A623'],
  },
};

export const CONFETTI_RAIN = {
  id: 'confetti-rain',
  type: 'confetti',
  emoji: '🌧️',
  label: 'Chuva',
  config: {
    // angle 270 = partículas caem de cima para baixo
    angle: 270,
    elementCount: 120,
    spread: 180,
    startVelocity: 20,
    decay: 0.97,
    lifetime: 280,
    elementSize: 8,
    colors: ['#FF6B6B', '#FFE66D', '#4ECDC4', '#45B7D1', '#96CEB4'],
  },
};

export const CONFETTI_GENTLE = {
  id: 'confetti-gentle',
  type: 'confetti',
  emoji: '✨',
  label: 'Suave',
  config: {
    elementCount: 30,
    spread: 30,
    startVelocity: 20,
    decay: 0.96,
    lifetime: 300,
    elementSize: 6,
    colors: ['#E0C3FC', '#8EC5FC', '#F5F7FA', '#D4FC79', '#96E6A1'],
  },
};

export const CONFETTI_GOLD = {
  id: 'confetti-gold',
  type: 'confetti',
  emoji: '🏆',
  label: 'Ouro',
  config: {
    elementCount: 60,
    spread: 55,
    startVelocity: 38,
    decay: 0.94,
    lifetime: 200,
    elementSize: 14,
    colors: ['#FFD700', '#FFC107', '#FF8F00', '#FFEB3B'],
  },
};

// ── BALLOONS ──────────────────────────────────────────────────────────────────

export const BALLOONS_DEFAULT = {
  id: 'balloons-default',
  type: 'balloons',
  emoji: '🎈',
  label: 'Balões',
  config: {
    elementCount: 12,
    spread: 60,
    startVelocity: 4,
    decay: 0.999,
    lifetime: 600,
    elementSize: 24,
    colors: ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'],
  },
};

export const BALLOONS_GIANT = {
  id: 'balloons-giant',
  type: 'balloons',
  emoji: '🎠',
  label: 'Gigantes',
  config: {
    elementCount: 6,
    spread: 80,
    startVelocity: 3,
    decay: 0.999,
    lifetime: 700,
    elementSize: 40,
    colors: ['#FF6B6B', '#FFE66D', '#4ECDC4', '#A29BFE'],
  },
};

export const BALLOONS_STORM = {
  id: 'balloons-storm',
  type: 'balloons',
  emoji: '🌪️',
  label: 'Tempestade',
  config: {
    elementCount: 25,
    spread: 120,
    startVelocity: 8,
    decay: 0.998,
    lifetime: 500,
    elementSize: 16,
    colors: ['#FF0080', '#7928CA', '#0070F3', '#00DFD8'],
  },
};

// ── EMOJI ─────────────────────────────────────────────────────────────────────

export const EMOJI_HEARTS = {
  id: 'emoji-hearts',
  type: 'emoji',
  emoji: '❤️',
  label: 'Corações',
  config: {
    emoji: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🩷'],
    elementCount: 25,
    spread: 70,
    startVelocity: 30,
    decay: 0.94,
    lifetime: 200,
    elementSize: 28,
    rotate: true,
  },
};

export const EMOJI_PARTY = {
  id: 'emoji-party',
  type: 'emoji',
  emoji: '🥳',
  label: 'Festa',
  config: {
    emoji: ['🎉', '🎊', '🥳', '🎈', '✨', '🌟', '🎶', '🍾'],
    elementCount: 30,
    spread: 80,
    startVelocity: 35,
    decay: 0.94,
    lifetime: 200,
    elementSize: 26,
    rotate: true,
  },
};

export const EMOJI_FOOD = {
  id: 'emoji-food',
  type: 'emoji',
  emoji: '🍕',
  label: 'Comida',
  config: {
    emoji: ['🍕', '🍔', '🌮', '🍜', '🍣', '🧁', '🍩', '🍟'],
    elementCount: 20,
    spread: 90,
    startVelocity: 28,
    decay: 0.94,
    lifetime: 200,
    elementSize: 30,
    rotate: true,
  },
};

export const EMOJI_STARS = {
  id: 'emoji-stars',
  type: 'emoji',
  emoji: '⭐',
  label: 'Estrelas',
  config: {
    // angle 270 = chuva estelar vinda de cima
    angle: 270,
    emoji: ['⭐', '🌟', '💫', '✨', '🌠', '☄️'],
    elementCount: 35,
    spread: 160,
    startVelocity: 15,
    decay: 0.97,
    lifetime: 300,
    elementSize: 22,
    rotate: true,
  },
};

// ── AGRUPADO POR SEÇÃO ────────────────────────────────────────────────────────

export const SECTIONS = [
  {
    label: 'Confetti',
    items: [
      CONFETTI_CLASSIC,
      CONFETTI_FIRE,
      CONFETTI_EXPLOSION,
      CONFETTI_RAIN,
      CONFETTI_GENTLE,
      CONFETTI_GOLD,
    ],
  },
  {
    label: 'Balões',
    items: [BALLOONS_DEFAULT, BALLOONS_GIANT, BALLOONS_STORM],
  },
  {
    label: 'Emojis',
    items: [EMOJI_HEARTS, EMOJI_PARTY, EMOJI_FOOD, EMOJI_STARS],
  },
];
