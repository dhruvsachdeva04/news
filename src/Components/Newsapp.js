import React, { useState } from "react";
import Card from "./Card.js";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setnewsData] = useState(null);
  const API_KEY = process.env.KEY;

  const getnews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setnewsData(jsonData.articles);
  };

  // useEffect(() => {
  //   getnews();
  // }, []);

  const searched = async (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    await getnews();
  };
  const getSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1> News Application </h1>
        </div>
        <ul>
          <a>Trending Latest News</a>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={getSearch}
          />
          <button onClick={getnews}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">stay updated with trendy news</p>
      </div>
      <div className="categoryBtn">
        <button className="bbtn" onClick={searched} value="stock market">
          Stock Market
        </button>
        <button className="bbtn" onClick={searched} value="politics">
          Politics
        </button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
