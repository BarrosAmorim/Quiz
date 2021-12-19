import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    private _id: number
    private _enunciado: string
    private _respostas: RespostaModel[]
    private _acertou: boolean
    //private respondida: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this._id = id
        this._enunciado = enunciado
        this._respostas = respostas
        this._acertou = acertou
    }

    get id() {
        return this._id
    }

    get enunciado() {
        return this._enunciado
    }

    get respostas() {
        return this._respostas
    }

    get acertos() {
        return this._acertou
    }

    get respondida() {
        for (let resposta of this._respostas) {
            if (resposta.revelada) return true
        }
        return false
    }

    embaralharRespostas(): QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this._respostas)
        return new QuestaoModel(this._id, this._enunciado, respostasEmbaralhadas, this._acertou)
    }

    paraObjetoQuestao() {
        return {
            id: this._id,
            enunciado: this._enunciado,
            respostas: this._respostas.map(resp => resp.paraObjetoResposta()),
            acertou: this._acertou
        }
    }

}