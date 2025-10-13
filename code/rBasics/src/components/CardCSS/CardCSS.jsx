// import './styles.css'
// import styles from './Card.module.css'
import styles from './Card.module.scss'

export const CardCSS = ({ title = 'Default title' }) => {
  const titleStyles = {
    color: 'white',
    fontSize: '2rem'
  }

  return (
    <section className={styles.card}>
      <h2 style={titleStyles}>{title}</h2>
    </section>
  )
}