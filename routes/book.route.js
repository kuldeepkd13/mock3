const express  = require("express");
const { BookModel } = require("../model/book.model");

const bookRoute = express.Router();

bookRoute.post("/add",async(req,res)=>{
    try {
        const {title,author,description,price,genre} = req.body

        const book = await BookModel.findOne({title:title,author:author})
        if(book){
            return res.status(400).send({"message":"Book With Same Title and Author Present"})
        }
        const newbook = new BookModel({title,author,description,price,genre})
        await newbook.save();
        res.status(200).send({"message":"New Book Added",newbook})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

bookRoute.get("/allbook",async(req,res)=>{

    try {
        const books = await BookModel.find();
        res.status(200).send({"message":"All the books data",books})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})


bookRoute.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const book = await BookModel.findByIdAndDelete({_id:id})
        res.status(200).send({"message":"book Deleted successfully"})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})

bookRoute.get("/filter",async(req,res)=>{
    try {
        const genre = req.query.genre
        console.log(genre)
        const book = await BookModel.find({genre});
        res.status(200).send({"message":"books data",book})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})
bookRoute.get("/sort",async(req,res)=>{
    try {
        const {order} = req.query

        let sort= {}
        if(order==="asc"){
            sort = {price:1}
        }else if(order==="desc"){
            sort= {price:-1}
        }
        const books  = await BookModel.find().sort(sort);
        res.status(200).send({"message":"sorted books data",books})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})

module.exports={bookRoute}