import React from "react";
import axios from "axios";

const MotiveQuote = () => {
  var options = {
    method: "GET",
    url:
      "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
    params: { token: "ipworld.info" },
    headers: {
      "x-rapidapi-key": "70e7f1efaemsh30c3ed3cb147977p1acc2fjsn202c4b6efbdb",
      "x-rapidapi-host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const quote = response.data;
      console.log(quote.text);
      console.log(quote.author);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
      <h2 className="inQuote2">{quote.text}</h2>
      <h4 className="author">{quote.author}</h4>
    </>
  );
};

export default MotiveQuote;
