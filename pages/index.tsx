import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Questao from '../components/Questao'
import QuestaoModel from '../models/questao'
import RespostaModel from '../models/resposta'


const Home: NextPage = () => {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Azul'),
    RespostaModel.errada('Rosa'),
    RespostaModel.certa('Preta')
  ])
  return (
    <div className={styles.home}>
      <Questao valor={questaoTeste} />
    </div>
  )
}

export default Home
