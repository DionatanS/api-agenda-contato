import mongoose from "mongoose";
import ContatoInterface from "../models/contato"
const {Schema} = mongoose;

const contatoSchema = new Schema ({
    nome: String,
    sobrenome: String,
    telefone: String,
    dataNascimento: String,
    endereco: String,
    email: String
}) 

const Contato = mongoose.model<ContatoInterface>('Contato', contatoSchema)
export default Contato;