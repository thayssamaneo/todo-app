// modelo para representar a tarefa no banco de dados

import mongoose, { Model, Schema } from "mongoose";

export interface ITodo extends Document{
    title: string;
    completed: boolean;
    createdAt: Date;
}

// classe modelo do banco

// regra do schema para tarefas
const TodoSchema: Schema<ITodo> = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "O título da Tarefa é Obrigatório"],
        trim: true,
        maxLength: [100, "O título da tarefa não pode ter mais de 100 caracteres"]
    },
    completed:{
        type: Boolean,
        default: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Todo: Model<ITodo> = mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);

// exportar o modelo
export default Todo;