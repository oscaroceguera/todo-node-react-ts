import { ITodo } from '../types/todo'
import { Model, model, Schema } from 'mongoose'

const todoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true
})

export default model<ITodo>("Todo", todoSchema);