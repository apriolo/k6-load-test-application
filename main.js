const express = require('express');
var path    = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+ '/index.html'));
});

// Endpoint que simula um processamento intensivo
app.get('/process', (req, res) => {
  const complexity = req.query.complexity || 1;
  const start = Date.now();

  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  // Simula um processamento demorado baseado na complexidade
  for (let i = 0; i < complexity * 10; i++) {
    console.log(i)
    const n = req.query.n || 30; // Define o número de Fibonacci a calcular
    const start = Date.now();
    const result = fibonacci(n);
    const end = Date.now();
  }

  const end = Date.now();
  const executionTime = end - start;

  res.json({
    message: 'Processamento concluído',
    executionTime: executionTime
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});