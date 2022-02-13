
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
export const FILMS_QUERY = gql`
{
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
  }
}
`;

function Main(){
    const { data, loading, error } = useQuery(FILMS_QUERY);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
      <div className="container" >
        <center data-testid="main-2"><h1>Star Wars All Films</h1></center>
        <ul className="list-group list-group-flush">
          {data.allFilms.films.map((film,index)=><li className={index%2===1?"list-group-item list-group-item-dark":"list-group-item list-group-item-light"} key={"film-"+film.title}><Link to="/details" state={{dats:film}}>{film.title}</Link></li>)}
        </ul>
      </div>
    );
}

export default Main;