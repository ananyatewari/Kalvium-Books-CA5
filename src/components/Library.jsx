import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Library.css";
import NavBar from "./NavBar";

export default function Library({ input, showInput }) {
  const [bookdata, setBookData] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        console.log(response.data.books);
        setBookData(response.data.books);
      })
      .catch((error) => console.log(error, "No result found!"));
  }, []);

  return (
    <>
      <NavBar
        input={input}
        showInput={showInput}
        result={result}
        setResult={setResult}
      />
      <div className="library flex flex-wrap justify-evenly">
        {bookdata.filter((item) => {
          return item.title.toLowerCase().includes(result.toLowerCase());
        }).length == 0 && result != "" ? (
          <div id="notfound">Oops! No result found for {result}</div>
        ) : (
          bookdata
            .filter((item) => {
              return item.title.toLowerCase().includes(result.toLowerCase());
            })
            .map((book) => (
              <div key={book.id} className="flex flex-col eachbook">
                <h4>{book.title}</h4>
                <img src={book.imageLinks.thumbnail} alt="bookpic" />
                <div className="flex justify-between">
                  <span
                    className="text-green-600"
                    style={{ textShadow: "1px 1px 9px darkgreen" }}
                  >
                    Free
                  </span>
                  <span>
                    {book.averageRating ? `${book.averageRating}⭐` : "4⭐"}
                  </span>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
}
