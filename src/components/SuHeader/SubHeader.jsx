import styles from './SubHeader.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';
import discordLogo from '../../assets/discord-logo.svg';

export function SubHeader() {
  return (
    <header className={styles.header}>
      <article>
        <section>
          <img src={igniteLogo} alt="Logotipo do Ignite" />
          <span>Acelere sua carreira em programação.</span>
        </section>
  
        <div className={styles.button}>
          <a href="#">
             <img src={discordLogo} alt="Logo discord"/>
            COMUNIDADE
          </a>
        </div>
     </article>
    </header>
  )
}

