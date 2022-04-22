"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function mongoConnect() {
    const uri = 'mongodb+srv://dionatanreact:98648625@cluster0.8gsz0.mongodb.net/schedule?retryWrites=true&w=majority';
    return mongoose_1.default.connect(uri).then(() => {
        console.log('Banco conectado!');
    }).catch((err) => {
        console.log("Erro ao conectar!", err);
    });
}
exports.default = mongoConnect;
