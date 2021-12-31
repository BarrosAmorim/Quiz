import styles from '../styles/Questao.module.css'
import QuestaoModel from "../models/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
    { valor: 'A', cor: '#f2c866'},
    { valor: 'B', cor: '#f266ba'},
    { valor: 'C', cor: '#85d4f2'},
    { valor: 'D', cor: '#bce596'},
]

type QuestaoProps = {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const Questao = (props: QuestaoProps) => {
    const questao = props.valor
    function rederizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={i}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador duracao={10} tempoEsgotado={props.tempoEsgotado} />
            {rederizarRespostas()}
        </div>
    )
}

export default Questao