import React from "react";

//Displays the title and value passed as props in a formatted paragraph
const MovieAttribute = ({ title, value }) => (
  <p>
    <u>
      <strong>{title}:</strong>
    </u>{" "}
    {value}
  </p>
);

export default MovieAttribute;
