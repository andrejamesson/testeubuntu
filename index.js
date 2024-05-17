const express = require('express');
const app = express();
const port = 3000; // Porta em que a API vai rodar

// Rota raiz
app.get('/', (req, res) => {
  res.send('OK'); 
  res.sendStatus(200); 
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});