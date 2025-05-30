//importo expreess
const express = require('express');
//inizializzo express nella variabile  app
const app = express();
//deefinisco il numero di porta
const port = 3000;

//imposto asset statici
app.use(express.static('public'));

//definisco la rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog!');
});

//definisco la rotta per il blog
app.get('/bacheca', (req, res) => {
  res.send('Benvenuto nel mio blog!');
});

//server che ascolta sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su ${port}`);
   
});

console.log('Server in ascolto su 3000');