import React, { useEffect, useState } from "react";

function MyBook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DisplayData();
  }, []);

  function DisplayData() {
    fetch(`https://expensive-crab-cuff-links.cyclic.app/book/allbook`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.books);
        setData(data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteBook(id) {
    fetch(`https://expensive-crab-cuff-links.cyclic.app/book/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        DisplayData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="main">
      <h1>All the Books</h1>
      <div>
        {data.map((el) => (
          <div key={el._id}>
            <h1>Title: {el.title}</h1>
            <h2>Author: {el.author}</h2>
            <p>Description: {el.description}</p>
            <p>Price: {el.price}</p>
            <p>Genre: {el.genre}</p>
            <button onClick={() => deleteBook(el._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBook;
