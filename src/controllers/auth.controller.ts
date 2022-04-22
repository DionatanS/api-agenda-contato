import { Request, Response } from 'express';

export async function autenticar(req: Request, res: Response) {
    const email = "teste@teste.com"
    const senha = "123456"

    if( email === req.body.email && senha === req.body.senha){
        res.send('true')
    }
}