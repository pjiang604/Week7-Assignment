import "./styles.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) //converts the data to json file
      .then((response) => {
        console.log(response);
        setData(response); //the data is now stored in the useState
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Your Daily Newspaper</h1>
      {data &&
        data.map((i, index) => {
          return <Card key={index} article={i} />;
        })}
    </div>
  );
}
