import mongoose from 'mongoose';

const peixeSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  Especie: {
    type: String,
    required: true,
  },
  Alimentacao: {
    type: String,
    required: true,
  },
  Quantidade: {
    type: Number,
    required: true,
  },
  Tempo_alimentacao: {
    type: String,
    required: true,
  },
  Imagem: {
    type: String,
    required: true,
  },
});

const Peixe = mongoose.model('peixes', peixeSchema);

export default Peixe;