import styles from './Card.module.scss';

export default function Card({ name, topics }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <hr />
      <p>{topics}</p>
    </div>
  );
}
