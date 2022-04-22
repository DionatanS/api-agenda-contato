"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const contatoSchema = new Schema({
    nome: String,
    sobrenome: String,
    telefone: String,
    dataNascimento: String,
    endereco: String,
    email: String
});
const Contato = mongoose_1.default.model('Contato', contatoSchema);
exports.default = Contato;
