const estoqueController = require("../Controller/estoqueController");

const express = require("express");
const router = express.Router();

router.get("/", estoqueController.buscarTodos);
router.get("/:id", estoqueController.buscarPorId);
router.post("/", estoqueController.criar);
router.put("/:id", estoqueController.editar);
router.delete("/:id", estoqueController.excluir)

module.exports = router;