const express = require("express");

const router = express.Router();

const {
  criarPaciente,
  listarPacientes,
  atualizarPaciente,
  deletarPaciente,
} = require("../controllers/pacienteController");

router.get("/", listarPacientes);

router.post("/", criarPaciente);

router.put("/:id", atualizarPaciente);

router.delete("/:id", deletarPaciente);

module.exports = router;