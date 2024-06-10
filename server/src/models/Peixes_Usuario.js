import mongoose from 'mongoose';

const peixesUsuarioSchema = new mongoose.Schema({
  ID_peixes: { type: Number, required: true },
  ID_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  Nome: { type: String, required: true }
});

const PeixesUsuario = mongoose.model('PeixesUsuario', peixesUsuarioSchema, 'peixes_usuario');

export default PeixesUsuario;