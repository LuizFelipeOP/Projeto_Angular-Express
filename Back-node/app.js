// Importando o módulo express para lidar com rotas e middlewares
const express = require('express');

// Inicializando a aplicação Express
const app = express();


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    // Pass to next layer of middleware
    next();
});


// Importando as rotas da aplicação relacionadas às tarefas
const tarefaRoutes = require('./routes/tarefaRoutes');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando as rotas da aplicação para utilizar as rotas 
//relacionadas às tarefas

app.use('/api', tarefaRoutes);

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



// app.get('/', (req, res) => {
//   res.send('Bem-vindo à API de tarefas!');
// });