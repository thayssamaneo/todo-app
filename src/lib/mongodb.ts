// serviço/bibloteca de conexão com o MongoDB
import mongoose from "mongoose";
// pega os dados da .env para o mongodb
const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI){
    throw new Error("Por favor, defina a DATABASE_URL no arquivo .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {conn: null, promisse: null};
}

async function connectMongo() {

    // se já existir uma conexão, retorna a conexão existente
    if (cached.con) {
        return cached.conn;
    }

    // se não existir pré conexão cria uma
    if (!cached.promisse) {
        const opts = {
            bufferCommands: false,
        };

        cached.promisse = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log("Conectad ao MongoDB");
            return mongoose;
        });
    }

    // se já existir pré conexão, executa a chamada
    try {
        cached.conn = await cached.promisse;
    } catch (e) { // se caso der algum erro retorna o erro
        cached.promisse = null;
        throw e;
    }
    
    // se não existir uma chamada e existir uma pré conexão, executa a chamada
    return cached.conn;
}

export default connectMongo;

// global é usado para manter a conexão em cache durante o uso do banco
// evita abrir várias conexões com o banco a cada nova solicitação (ideia parecida com o singleton)
// a conexão é reutilizada sempre que necessário evitando o famoso fatalerror "To Many Clients Already"