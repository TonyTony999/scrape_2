const mongoose=require("mongoose")
const express= require("express")
const app=express()
const routes=require("./routes")
const cors=require("cors")
const path =require("path")

require("dotenv").config()

//const HOST=process.env.HOST
const PORT=process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_URL


mongoose.connect(MONGO_URL, {useNewUrlParser:true,useUnifiedTopology:true })

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'Frontend/my-app/build')));

app.use(routes)
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/Frontend/my-app/build/index.html')); });

app.listen(PORT, ()=>{

    console.log(`listening to port:${PORT}`)
})
