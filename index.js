const express = require('express');
const app = express();
const allRoutes = require('./routes/allRoutes');
const mongoDb = require('./mongoDB');
const morgan = require('morgan')
mongoDb();

app.use(express.json());
morgan('tiny')
app.use('/api/v1',allRoutes);
app.use(express.urlencoded());

app.listen(3000,()=>{
    console.debug('App listening on :3000')
})