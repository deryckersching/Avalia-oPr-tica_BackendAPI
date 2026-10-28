const produtosController = require("../Controller/produtosController");

const express = require("express");
const router = express.Router();

router.get("/", produtosController.buscarTodos);
router.get("/:id", produtosController.buscarPorId);
router.post("/", produtosController.criar);
router.put("/:id", produtosController.editar);
router.delete("/:id", produtosController.excluir)

module.exports = router;