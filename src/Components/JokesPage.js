import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JokesPage.css";

const JokesPage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      setJokes(response.data.jokes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <table className="jokes-table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">JOKES😄😁😆🤣</th>
          </tr>
        </thead>
        <tbody style={{ fontFamily: "cursive" }}>
          {jokes.length > 0
            ? jokes.map((jokeitem, index) => (
                <tr key={jokeitem.id}>
                  <td>{index + 1}</td>
                  <td>{jokeitem.joke}🤣</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default JokesPage;
