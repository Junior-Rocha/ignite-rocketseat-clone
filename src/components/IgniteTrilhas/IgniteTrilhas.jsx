import styles from './IgniteTrilhas.module.css'


import { ChatsCircle, PlayCircle } from 'phosphor-react'

export function IgniteTrilhas({ cardInfo}) {
  
  return (

   <div className={styles.wrapperContainer}>
   
     <header className={styles.headerCard}>
     <img src={cardInfo.logoAvatar}  />

      <div className={styles.title}>
        <h2>{cardInfo.name}</h2>
        <span>{cardInfo.stack}</span>
      </div>

     </header>

     <main>
      <p>
        {cardInfo.content}
      </p>
     </main>

     <footer className={styles.footer}>
      <a href="#">
       <button>
          <span className={styles.buttonGroup}>
            <PlayCircle size={20}  color="#00B37E" />
            <span>Acessar</span>
          </span>
       </button>
      </a>

      <a href="#">
       <button>
          <span className={styles.buttonGroup}>
            <ChatsCircle size={20} color="#00B37E" />
            <span>Fórum</span>
          </span>
       </button>
      </a>
     </footer>
     
   </div>
  )
}