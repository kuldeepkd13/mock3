import React ,{ useState }  from "react";

function Add(){
 const [title, setTitle] = useState("")
 const [author, setAuthor] = useState("")
 const [description, setDescription] = useState("")
 const [price, setPrice] = useState("");
 const [genre,setGenre] = useState("")
    return(
        <div>
            <h1>Add book</h1>
          <form  onSubmit={(e)=>{
             e.preventDefault();
             fetch(`https://expensive-crab-cuff-links.cyclic.app/book/add`,{
                method:`POST`,
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title,author,description,price,genre
                }),
             })
             .then((res)=> res.json())
             .then((data)=>{
                 alert(data.message)
                 console.log(data)
                 window.location.reload();
             }).catch((err)=>{
                console.log(err.message)
             })
          }}>
            <label htmlFor="Title">Title:-</label>
            <input value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" placeholder="Add Title" /> <br />
            <label htmlFor="Author">Author:-</label>
            <input value={author} onChange={(e)=>{
                setAuthor(e.target.value)
            }} type="text" placeholder="Add Author" /> <br />
            <label htmlFor="Description">Description:-</label>
            <textarea value={description} onChange={(e)=>{
                setDescription(e.target.value)
            }} name="Description" placeholder="Add Description" id="Description" cols="30" rows="10"></textarea> <br />
            <label htmlFor="Price">Price:-</label>
            <input value={price} onChange={(e)=>{
                setPrice(e.target.value)
            }} type="number" placeholder="Add Price" /> <br />
            <label htmlFor="Genre">Genre:-</label>
            <select value={genre} onChange={(e)=>{
                setGenre(e.target.value)
            }}>
                <option value="Fiction">Fiction</option>
                <option value="Science">Science</option>
                <option value="Comic">Comic</option>
            </select><br />
            <input type="submit" value="Add book" />
          </form>
        </div>
    )
}

export default Add;