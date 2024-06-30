import React, { useState, useEffect } from 'react';
import api from '../../../../login2/src/api.js';
import api_upbit from '../../../../login2/src/api_upbit.js';
import api_alpaca from '../../../../login2/src/api_alpaca.js';
import api_alpaca_paper from '../../../../login2/src/api_alpaca_paper.js';

import './manage_watchlist.css';

function DataFetchingComponent() {
  const [inputValue, setInputValue] = useState('');
  const [symbol, setSymbol] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState('');
  const [postError, setPostError] = useState(null);
  const [postResponse, setPostResponse] = useState(null);
  const [upbitInput, setUpbitInput] = useState('');


  const [data, setData] = useState(null);
  const [upbitData, setUpbitData] = useState(null);
  const [error, setError] = useState(null);




  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }





  const handlePostSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newTicker = {
      symbol,
    };

    try {
      const res = await api.post('/watchlists/604bda03-b29e-44b4-9fb1-70ecdb18a5be', newTicker); // Adjust the endpoint as needed
      setPostResponse(res.data);
    } catch (err) {
      setError(err);
    }
  };





  return (
    <div>
     



    <form className='post-test-form'   onSubmit={handlePostSubmit}>
        <div>
          <label>Title:</label>
          <input 
          className='post-input'
            type="text" 
            value={symbol} 
            onChange={(e) => setSymbol(e.target.value)} 
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {postResponse && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(postResponse, null, 2)}</pre>
        </div>
      )}
      {postError && (
        <div>
          <h2>Error</h2>
          <pre>{JSON.stringify(postError, null, 2)}</pre>
        </div>
      )}



    </div>
  );
}

export default DataFetchingComponent;
