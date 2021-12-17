const express = require('express');
const cors = require('cors');
const { newSelected, newRandom } = require('./controllers');
const { ran, sel } = require('./routes/index');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/selected', sel);

app.use('/random', ran);

app.listen(PORT, () => console.log(`ouvindo porta => ${PORT}!`));
