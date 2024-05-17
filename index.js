const express = require('express');
const app = express();
const port = 3000; // Porta em que a API vai rodar

// Rota raiz
app.get('/', (req, res) => {
  res.send('OK'); 
  res.sendStatus(200); 
});

app.post('/msg', (req, res) => {
    const mensagemRecebida = req.body.mensagem; // Extrai a mensagem do corpo da requisição
  
    if (mensagemRecebida) {
      res.status(200).send(`Mensagem recebida: ${mensagemRecebida}`);
    } else {
      res.status(400).send('Nenhuma mensagem encontrada no corpo da requisição.');
    }
  });
// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});