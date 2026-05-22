# 🎊 Confetti Playground

Site de demonstração de todas as variantes do [react-rewards](https://github.com/thedevelobear/react-rewards).

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm start

# 3. Build de produção
npm run build
```

## Estrutura do projeto

```
src/
├── configs/
│   └── rewards.js          ← ✅ Todas as configs aqui!
├── components/
│   ├── RewardButton.jsx    ← Botão reutilizável
│   ├── RewardButton.module.css
│   ├── Section.jsx         ← Grupo de botões por categoria
│   └── Section.module.css
├── App.jsx                 ← Layout principal
├── App.module.css
├── index.js
└── index.css
```

## Como usar uma variante no seu projeto

Cada variante é exportada de `src/configs/rewards.js` com nome descritivo.

```jsx
import { useReward } from 'react-rewards';
import { CONFETTI_FIRE } from './configs/rewards';

function MeuComponente() {
  const { reward, isAnimating } = useReward(
    CONFETTI_FIRE.id,     // ID do elemento âncora
    CONFETTI_FIRE.type,   // 'confetti' | 'balloons' | 'emoji'
    CONFETTI_FIRE.config  // objeto de configuração
  );

  return (
    <button onClick={reward} disabled={isAnimating}>
      <span id={CONFETTI_FIRE.id} />
      🔥 Clique!
    </button>
  );
}
```

## Variantes disponíveis

### Confetti
| Export | Descrição |
|---|---|
| `CONFETTI_CLASSIC` | Padrão da lib, equilibrado |
| `CONFETTI_FIRE` | Só cores quentes (laranja/vermelho) |
| `CONFETTI_EXPLOSION` | Spread máximo, muitas partículas |
| `CONFETTI_RAIN` | Ângulo 270° — cai de cima |
| `CONFETTI_GENTLE` | Poucas partículas, flutuam devagar |
| `CONFETTI_GOLD` | Partículas grandes e douradas |

### Balões
| Export | Descrição |
|---|---|
| `BALLOONS_DEFAULT` | Flutuam suavemente para cima |
| `BALLOONS_GIANT` | Poucos, porém enormes |
| `BALLOONS_STORM` | Muitos e em alta velocidade |

### Emojis
| Export | Descrição |
|---|---|
| `EMOJI_HEARTS` | Todos os tons de coração |
| `EMOJI_PARTY` | Mix de celebração |
| `EMOJI_FOOD` | Fast-food saindo pelos ares |
| `EMOJI_STARS` | Chuva estelar vinda de cima |
