const  mongoose  = require("mongoose")

const bookSchema = mongoose.Schema({
    title:{type:String , required:true},
    author:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    genre :{type:String,enum:["Fiction","Science", "Comic"],required:true}
},{
    versionKey:false
})


const BookModel = mongoose.model("book",bookSchema)

module.exports = {BookModel}


// - Title
// - Author
// - Genre (a dropdown select tag with the following values: Fiction, Science, Comic)
// - Description (a textarea input field)
// - Price