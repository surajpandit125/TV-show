// import {useParams} from 'react-router-dom';
import React, { useState, useEffect,useParams } from 'react';

import axios from 'axios';

function ShowSummary() {
  const { id, url } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}/`)
      // .get(`https://api.tvmaze.com/search/shows?{summary}/`)

      .then(response => setSummary(response.data.summary))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
    
    </div>
  );
}

export default ShowSummary;