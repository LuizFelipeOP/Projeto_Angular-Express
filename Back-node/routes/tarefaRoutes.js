const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
// Rotas para operações CRUD de tarefas
router.get('/listar', tarefaController.listarTarefas);
router.post('/teste_post', tarefaController.testePost);
router.post('/tarefas', tarefaController.criarTarefa);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);
module.exports = router;