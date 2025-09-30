const express = require('express');
const router = express.Router();

// Exemplo de rota (pode deixar vazio por enquanto)
router.get('/', (req, res) => {
  res.json({ message: 'Rota de carrinho funcionando!' });
});

module.exports = router;