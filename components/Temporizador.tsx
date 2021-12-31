import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

type TemporizadorProps = {
    duracao: number
    tempoEsgotado: () => void
}

const Temporizador = (props: TemporizadorProps) => {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[
                    ['#bce596', 0.33],
                    ['#f78801', 0.33],
                    ['#ed827a', 0.33],
                ]}>
                    {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default Temporizador 