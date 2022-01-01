import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Questao from '../components/Questao'
import QuestaoModel from '../models/questao'
import RespostaModel from '../models/resposta'
import { useState } from 'react'
import Botao from '../components/Botao'


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
  }

  function tempoEsgotado() {
    if (!questao.respondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div className={styles.home}>
      <Questao
        valor={questao}
        tempoResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto='Próxima' href='/resultado'/>
    </div>
  )
}

export default Home
