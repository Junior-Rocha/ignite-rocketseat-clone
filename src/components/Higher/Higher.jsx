import styles from './Higher.module.css'

import { CaretRight} from 'phosphor-react'

import higherLogo from '../../assets/higher.svg'

export function Higher () {
  return (
  <div>
  <a href="#" className={styles.wrapper}>

    <div className={styles.logo}>
      <img src={higherLogo} alt="Logo higher" />
      <h2>Higher</h2>

      <div className={styles.higherTitle}>
          Indo além do código: conteúdo para desenvolver habilidades comportamentais (soft skills)
        <br/>
        e se destacar como profissional.
      </div>

    </div>

  

    <div className={styles.icon}>
      <CaretRight  size={28} color="#ffffff" weight="bold" />
    </div>
    </a>
  </div>
  )
}