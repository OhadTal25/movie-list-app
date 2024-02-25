import React from "react";

const MovieAttribute = ({ title, value }) => (
  <p>
    <u>
      <strong>{title}:</strong>
    </u>{" "}
    {value}
  </p>
);

export default MovieAttribute;
