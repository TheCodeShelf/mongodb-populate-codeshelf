require('dotenv').config();
require('dotenv-flow').config({ path: './env/'});
const express = require('express');
const app = express();
global.logger = require('./app/config/winston');
const PORT = process.env.PORT || 5000;

const onServerStarted = () => { logger.info(`Server started on ${PORT}`) };


app.use(express.json());
app.use(process.env.API_VERSION , require('./app/routes/user'));

app.listen(PORT, onServerStarted());