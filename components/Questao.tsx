import styles from '../styles/Questao.module.css'
import QuestaoModel from "../models/questao";
import Enunciado from './Enunciado';

type QuestaoProps = {
    valor: QuestaoModel
}

const Questao = (props: QuestaoProps) => {
    const questao = props.valor
    return (
        <div className={styles.container}>
          <Enunciado texto={questao.enunciado} />
        </div>
    )
}

export default Questao