import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  //UseEffect Permet de jouer une fonction des que le composant et monter ca le joue 1 fois
  useEffect(() => {
    //permet d'aller chercher
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=64fcb978d7df8a9d608cb292521e1109&query=avenger&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top <span> →</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop <span> →</span>
          </div>
        </div>
      </div>
      <div className="result">
        {/* slice() renvoie un objet tableau, contenant une copie superficielle
        d'une portion du tableau d'origine */}
        {moviesData.slice(0, 12).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Form;
