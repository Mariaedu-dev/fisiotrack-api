const Paciente = require("../models/Paciente");

const criarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);

    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({
      erro: error.message,
    });
  }
};

const listarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();

    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
};

const atualizarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
      }
    );

    if (!paciente) {
      return res.status(404).json({
        mensagem: "Paciente não encontrado",
      });
    }

    res.status(200).json(paciente);
  } catch (error) {
    res.status(400).json({
      erro: error.message,
    });
  }
};

const deletarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(
      req.params.id
    );

    if (!paciente) {
      return res.status(404).json({
        mensagem: "Paciente não encontrado",
      });
    }

    res.status(200).json({
      mensagem: "Paciente removido com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
};

module.exports = {
  criarPaciente,
  listarPacientes,
  atualizarPaciente,
  deletarPaciente,
};