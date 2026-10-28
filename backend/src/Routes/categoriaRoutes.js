const categoriaController = require("../Controller/categoriaController");

const express = require("express");
const router = express.Router();

router.get("/", categoriaController.buscarTodos);
router.get("/:id", categoriaController.buscarPorId);
router.post("/", categoriaController.criar);
router.put("/:id", categoriaController.editar);
router.delete("/:id", categoriaController.excluir)

module.exports = router;