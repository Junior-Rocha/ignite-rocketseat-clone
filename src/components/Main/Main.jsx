import { CurrentLesson } from "../CurrentLesson/CurrentLesson";
import { Higher } from "../Higher/Higher";
import { IgniteTrilhas } from "../IgniteTrilhas/IgniteTrilhas";

import reactLogo from '../../assets/react-js.svg'
import nodeLogo from '../../assets/node-js.svg'
import reactNativeLogo from '../../assets/react-native.svg'

import styles from './Main.module.css';

const trilhas = [
  {
    id: 1,
    card: {
      logoAvatar: reactLogo,
      name: 'ReactJS',
      stack: 'Front-end',
      content: "ReactJS Desenvolva interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável."
    },
  },
  {
    id: 2,
    card: {
      logoAvatar: reactNativeLogo,
      name: 'React Native',
      stack: 'Mobile',
      content: "Desenvolva aplicações mobile modernas e reativas tanto para iOS quanto para Android de forma nativa."
    },
  },
  {
    id: 3,
    card: {
      logoAvatar: nodeLogo,
      name: 'Node.js',
      stack: 'Back-end',
      content: "Construa arquiteturas escaláveis e simples para a web utilizando uma linguagem flexível e popular."
    },
  },
]

export function Main () {
  return (
    <div className={styles.wrapperContainer}>

      <CurrentLesson/>
      <Higher/>

      <div className={styles.wrapperTrilhas}>
        
      {trilhas.map(item => {
        return (
         <IgniteTrilhas
           cardInfo={item.card}
         />
        )
      })}
      </div>

    </div>
  )
}