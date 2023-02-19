import styles from './Header.module.css'

import rocketLogo from '../../assets/rocket-logo.svg'
import userPlusLogo from '../../assets/user-plus.svg';
import notificationsLogo from '../../assets/notifications.svg';


export function Header() {
  return (
 

    <header className={styles.header}>
     
    <img 
        className={styles.logo}
        src={rocketLogo} 
      />

      <div className={styles.menu}>
        <a href="#">Home</a>
        <a href="#">Eventos</a>
        <a href="#">Discover</a>
        <a href="#">Ignite</a>
        <a href="#">Plus</a>
      </div>

      <div className={styles.profile}>

        <div className={styles.userConnections}>
          <button>
            <img src={userPlusLogo}  />
          </button>
        </div>

        <div className={styles.notifications}>
          <button>
            <img src={notificationsLogo}  />
          </button>
        </div>

        <div className={styles.userAvatar}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/33812805?v=4"/>
        </div>

      </div>

    </header>
    
  )
}