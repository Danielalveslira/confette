import RewardButton from './RewardButton';
import styles from './Section.module.css';

export default function Section({ label, items }) {
  return (
    <section className={styles.section}>
      <p className={styles.label}>{label}</p>
      <div className={styles.grid}>
        {items.map((entry) => (
          <RewardButton key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
