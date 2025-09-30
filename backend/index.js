require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importa as rotas (vamos criar elas nos próximos passos)
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});