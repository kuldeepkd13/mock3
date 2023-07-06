const express = require("express");
const {connection} = require("./config/db")
const cors = require("cors");
const { bookRoute } = require("./routes/book.route");

require("dotenv").config();
const app = express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/book",bookRoute)

app.listen(process.env.Port,async()=>{
    try {
        await connection
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log(error.message);
        console.log("Notconnected to Mongodb")
    }
    console.log(`server is running at port ${process.env.Port}`)
})