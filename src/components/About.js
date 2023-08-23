import React from "react";
import Links from "./Links"; // Import the Links component

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
