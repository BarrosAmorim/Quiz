export default class RespostaModel {
    private _valor: string
    private _certa: boolean
    private _revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false) {
        this._valor = valor
        this._certa = certa
        this._revelada = revelada
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true)
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this._valor
    }

    get certa() {
        return this._certa
    }

    get revelada() {
        return this._revelada
    }

    revelar() {
        return new RespostaModel(this._valor, this._certa, true)
    }

    paraObjetoResposta() {
        return {
            valor: this._valor,
            certa: this._certa,
            revelada: this._revelada,
        }
    }
}