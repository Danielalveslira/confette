import { useReward } from 'react-rewards';
import styles from './RewardButton.module.css';

/**
 * RewardButton
 *
 * A âncora <span id={id}> fica inline no centro do botão.
 * O react-rewards lê sua posição real no DOM via getBoundingClientRect()
 * e dispara as partículas a partir daí — sem position:absolute.
 *
 * Para usar em qualquer lugar:
 *   const { reward } = useReward(entry.id, entry.type, entry.config);
 *   <button onClick={reward}><span id={entry.id} /></button>
 */
export default function RewardButton({ entry }) {
  const { id, type, emoji, label, config } = entry;

  const { reward, isAnimating } = useReward(id, type, {
    ...config,
    zIndex: 9999,
    position: 'fixed', // fixed = coordenadas do viewport, não da página
  });

  return (
    <button
      className={`${styles.btn} ${isAnimating ? styles.firing : ''}`}
      onClick={reward}
      disabled={isAnimating}
      aria-label={`Disparar ${label}`}
    >
      {/*
        Âncora: elemento inline de tamanho 0 — origin point da animação.
        Fica no fluxo normal do botão (não usa position:absolute).
        O react-rewards usa getBoundingClientRect() nele para saber
        de onde disparar as partículas.
      */}
      <span id={id} style={{ display: 'inline-block', width: 0, height: 0 }} />

      <span className={styles.icon} aria-hidden="true">{emoji}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
