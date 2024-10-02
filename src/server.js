const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/tienda')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));


app.use(cors());
app.use(bodyParser.json());


app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});