import style from  '../styles/Enunciado.module.css'

type EnunciadoProps = {
    texto: string
}

const Enunciado = (props: EnunciadoProps) => {
    return (
        <div className={style.enunciado}>
            <span className={style.texto}>
                {props.texto}
            </span>
        </div>
    )
} 

export default Enunciado