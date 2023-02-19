import styles from './CurrentLesson.module.css'

import playLogo from '../../assets/play-lesson.svg'


export function CurrentLesson() {
  return (
    <a href="#" className={styles.lesson}>
      <div className={styles.lessonName}>
        <h3>Componente: Sidebar</h3>
        <span>Ignite / ReactJS / Estrutura da aplicação</span>
      </div>
      <div className={styles.playLesson}>
        <span> CONTINUAR ASSISTINDO</span>
        <img src={playLogo} alt="Play Lesson" />
      </div>
    </a>
  )
}