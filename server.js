const express = require('express');
require('dotenv').config();
const { Contenedor } = require('./src/helpers/contenedor');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contenedor = new Contenedor('./src/data/productos.json');


const leerBBDD = async () => {
    data = await contenedor.getAll();
    return data;
}


app.get('/', function (req, res) {
    res.send('Servido con node.js');
});

app.get('/productos', async function (req, res) {
    
    const productos = await leerBBDD(); 

    res.send( 
        productos
     );
});

app.get('/productoRandom', async function (req, res) {
    
    const producto = await contenedor.productRandom(); 

    res.send( 
        producto
     );
});
    
app.listen(process.env.PORT, function () {
    console.log(`El servidor está funcionando en el puerto ${process.env.PORT}`);
});    