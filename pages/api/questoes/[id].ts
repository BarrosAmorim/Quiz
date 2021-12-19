import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default function (req: NextApiRequest, res: NextApiResponse) {
    const idSelecionado = +req.query.id
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)
    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObjetoQuestao())
    } else {
        res.status(404).send('No Content')
    }
}
