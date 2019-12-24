const express = require('express');
const app = express();
const allRoutes = require('./routes/allRoutes');
const mongoDb = require('./mongoDB');
mongoDb();

app.use(express.json());
app.use('/api/v1',allRoutes);

app.listen(3000,()=>{
    console.log(`Connected on port 3000`)
})