import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='main-container'>
    <div className='container'>
      <h1>List of Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
     
            <img src={show.show.image ? show.show.image.medium : ''} alt={show.show.name} />
            <p>{show.show.summary}</p>
            <p>Genres: {show.show.genres.join(', ')}</p>
            <p>Rating: {show.show.rating.average}</p>

            <Link to={`/summary/${show.show.url}`}>
              {/* <h2>{show.show.name}</h2> */}
              <div className='card-button'>
        <a href="name" target="_blank"></a>
        {/* {show.show.name} */}
        Read More
      </div>
            </Link>
           
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ShowList;
