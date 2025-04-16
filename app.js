//importo expreess
const express = require('express');
//inizializzo express nella variabile  app
const app = express();
//ddeefinisco il numero di porta
const port = 3000;

//definisco la rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog!');
});

//server che ascolta sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});