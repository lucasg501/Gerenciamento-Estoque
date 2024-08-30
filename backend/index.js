const express = require('express');
const cors = require('cors');
const swaggerJson = require('./outputSwagger.json');
const swaggerUi = require('swagger-ui-express');
const app = express();
const categoriaRota = require('./routes/categoriaRoute');


app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/categoria', categoriaRota);

app.listen('4000', function(){
    console.log('Express server listening on port 4000');
})