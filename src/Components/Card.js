import React from "react";

const Card = ({ data }) => {
  console.log(data);

  // Function to handle the redirection logic
  const handleReadMore = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <img src={curItem.urlToImage} alt={curItem.title} />
              <div className="content">
                <a
                  className="title"
                  onClick={() => handleReadMore(curItem.url)}
                >
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => handleReadMore(curItem.url)}>
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
