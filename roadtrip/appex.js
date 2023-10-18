const express = require('express')
const app = express()
const port=8080

//servi un contenido estatico
app.use(express.static('roadtrip'));

app.get('/index', function (req, res) {
  res.send('/roadtrip/index.html')
});
app.get('/index.html', function (req, res) {
    //res.send('hola mundo con su respectiva ruta')
  });
  app.get('*', (req, res) => {
    res.sendFile(__dirname+'/index.html')
  });


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })