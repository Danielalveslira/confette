import { SECTIONS } from './configs/rewards';
import Section from './components/Section';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <h1 className={styles.title}>Confetti Playground</h1>
        <p className={styles.sub}>Clique para disparar</p>
      </header>

      <main>
        {SECTIONS.map((section) => (
          <Section
            key={section.label}
            label={section.label}
            items={section.items}
          />
        ))}
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerLabel}>Como usar uma variante</p>
        <pre className={styles.code}>{`import { useReward } from 'react-rewards';
import { CONFETTI_FIRE } from './configs/rewards';

const { reward } = useReward(
  CONFETTI_FIRE.id,
  CONFETTI_FIRE.type,
  CONFETTI_FIRE.config
);

<button onClick={reward}>
  <span id={CONFETTI_FIRE.id} />
  Clique
</button>`}</pre>
      </footer>

    </div>
  );
}
