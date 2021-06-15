const express = require ('express')
const mongoose = require ('mongoose')


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({message: 'Hello World'})
});


app.listen(port, ()=>{
    console.log(`🔸Server started on port ${port}🔸`)
} )
