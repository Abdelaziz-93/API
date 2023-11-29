const express=require('express')
const app = express()
const ConnectDb = require('./config/connectDB')
const userRoutes = require('./routes/userRoutes')
const carRoutes = require('./routes/carRoutes')
const orderRoutes = require('./routes/ordreRoutes')
app.use(express.json())
ConnectDb();

app.use('/user',userRoutes)
app.use('/car',carRoutes)
app.use('/order',orderRoutes)



app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });