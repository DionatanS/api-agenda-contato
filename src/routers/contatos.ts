import { Express } from 'express';
import { autenticar } from '../controllers/auth.controller';
import { atualizar, criar, listar, remover } from '../controllers/contato.controllers';


export default function(app: Express){
    app.get('/contatos', listar);
    app.post('/contatos', criar);
    app.delete('/contatos/:id', remover);
    app.put('/contatos/:id', atualizar);

    app.post('/autenticar', autenticar);
}
