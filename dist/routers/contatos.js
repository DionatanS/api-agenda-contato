"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const contato_controllers_1 = require("../controllers/contato.controllers");
function default_1(app) {
    app.get('/contatos', contato_controllers_1.listar);
    app.post('/contatos', contato_controllers_1.criar);
    app.delete('/contatos/:id', contato_controllers_1.remover);
    app.put('/contatos/:id', contato_controllers_1.atualizar);
    app.post('/autenticar', auth_controller_1.autenticar);
}
exports.default = default_1;
