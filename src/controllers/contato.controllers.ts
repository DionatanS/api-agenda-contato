import { Request, Response } from 'express';
import Contato from "../schema/contato.schema"

export async function listar(req: Request, res: Response){
    const contatos = await Contato.find();
    return res.send(contatos);
}

export async function criar(req: Request, res: Response){
    const body = req.body;
    console.log(body)
    const contato = await Contato.create(body);
    return res.send(contato);
}

export async function remover(req: Request, res: Response){
    const contatoId = req.params.id;

    const deleteOne = await Contato.deleteOne({ _id: contatoId});
    if(deleteOne.deletedCount > 0){
        return res.status(204).send();
    } 
    return res.status(404).send({"mensagem":"Contato não encontrado!"});
}


export async function atualizar(req: Request, res: Response){
    const contatoId = req.params.id;
    const update = req.body;

    const contato = await Contato.findOne({_id:contatoId});

    if(!contato){
        return res.status(404).send({"mensagem":"Contato não encontrado!"});
    }
    const contatoAtualizado = await Contato.findOneAndUpdate({_id:contatoId}, update, { new: true })

    return res.send(contatoAtualizado)    
}