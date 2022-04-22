import mongoose from "mongoose";

function mongoConnect(){
    const uri = 'mongodb+srv://dionatanreact:98648625@cluster0.8gsz0.mongodb.net/schedule?retryWrites=true&w=majority';
    return mongoose.connect(uri).then(() => {
        console.log('Banco conectado!')
    }).catch((err) =>{
        console.log("Erro ao conectar!", err)
    })
}

export default mongoConnect;

