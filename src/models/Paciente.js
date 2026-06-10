const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },

    idade: {
      type: Number,
      required: true,
    },

    sexo: {
      type: String,
      required: true,
    },

    queixaPrincipal: {
      type: String,
      required: true,
    },

    diagnosticoFuncional: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Paciente", pacienteSchema);