"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizar = exports.remover = exports.criar = exports.listar = void 0;
const contato_schema_1 = __importDefault(require("../schema/contato.schema"));
function listar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const contatos = yield contato_schema_1.default.find();
        return res.send(contatos);
    });
}
exports.listar = listar;
function criar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        console.log(body);
        const contato = yield contato_schema_1.default.create(body);
        return res.send(contato);
    });
}
exports.criar = criar;
function remover(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const contatoId = req.params.id;
        const deleteOne = yield contato_schema_1.default.deleteOne({ _id: contatoId });
        if (deleteOne.deletedCount > 0) {
            return res.status(204).send();
        }
        return res.status(404).send({ "mensagem": "Contato não encontrado!" });
    });
}
exports.remover = remover;
function atualizar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const contatoId = req.params.id;
        const update = req.body;
        const contato = yield contato_schema_1.default.findOne({ _id: contatoId });
        if (!contato) {
            return res.status(404).send({ "mensagem": "Contato não encontrado!" });
        }
        const contatoAtualizado = yield contato_schema_1.default.findOneAndUpdate({ _id: contatoId }, update, { new: true });
        return res.send(contatoAtualizado);
    });
}
exports.atualizar = atualizar;
