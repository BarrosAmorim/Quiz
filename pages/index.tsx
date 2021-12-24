import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Questao from '../components/Questao'
import QuestaoModel from '../models/questao'
import RespostaModel from '../models/resposta'
import { useState } from 'react'


const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.certa('Azul'),
  RespostaModel.errada('Rosa'),
  RespostaModel.errada('Preta')
])

const Home: NextPage = () => {
  const [questao, setQuestao] = useState(questaoTeste)

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }

  return (
    <div className={styles.home}>
      <Questao valor={questao}  respostaFornecida={respostaFornecida}/>
    </div>
  )
}

export default Home
