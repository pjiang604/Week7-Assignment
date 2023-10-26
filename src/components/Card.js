import { useState, useEffect } from "react";
import "../styles.css";

export default function Card({ article }) {
  const [author, setAuthor] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //converts the data to json file
      .then((response) => {
        console.log(response);
        setAuthor(response); //the data is now stored in the useState
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="postCard">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      {author &&
        author.map((i, index) => {
          if (article.userId === i.id) {
            return (
              <>
                <a href={i.website} className="name">
                  <h3>By: {i.name}</h3>
                </a>
                <div className="contact">
                  <p>Contact information: </p>
                  <p>{i.email}</p>
                  <p>{i.phone}</p>
                </div>
              </>
            );
          }
        })}
    </div>
  );
}
