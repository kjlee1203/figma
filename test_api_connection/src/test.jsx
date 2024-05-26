import React, { useState, useEffect } from 'react';
import api from '../../login2/src/api.js';
import api_upbit from '../../login2/src/api_upbit.js';

import './test.css';

function DataFetchingComponent() {
  const [inputValue, setInputValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState('');
  const [postError, setPostError] = useState(null);
  const [postResponse, setPostResponse] = useState(null);
  const [upbitInput, setUpbitInput] = useState('');


  const [data, setData] = useState(null);
  const [upbitData, setUpbitData] = useState(null);
  const [error, setError] = useState(null);
  const [upbitError, setUpbitError] = useState(null);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }



  const handleSubmit = async () => {
    setError(null);
    setData(null);

    // if input value == '/', then fetch all data
    if (inputValue === '/') {
      try {
        const postResponse = await api.get(`/`);
        setData(postResponse.data);
      } catch (err) {
        setError(err);
      } 
      return;
    }


    try {
      const postResponse = await api.get(`/todo/${inputValue}`);
      setData(postResponse.data);
    } catch (err) {
      setError(err);
    } 
  };


  const handlePostSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskData = {
      title,
      description,
      priority: parseInt(priority, 10), // Ensure priority is an integer
      completed: JSON.parse(completed) // Ensure completed is a boolean
    };

    try {
      const res = await api.post('/todo', taskData); // Adjust the endpoint as needed
      setPostResponse(res.data);
    } catch (err) {
      setError(err);
    }
  };


  const handleUpbitInput = (event) => {
    setUpbitInput(event.target.value);
  }

  const handleUpbitSubmit = async () => {
    setUpbitError(null);
    setUpbitData(null);

    try {
      const upbitResponse = await api_upbit.get(`/candles/minutes/1?market=${upbitInput}`);
      setUpbitData(upbitResponse.data);
    } catch (err) {
      setUpbitError(err);
    } 
  };


  return (
    <div>
      <h1 className="h1-style">Enter id</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter the id" 
        className="input-text"
      />
      <button className="submit-button" 
       onClick={handleSubmit}>Submit</button>

      {error && <div>Error!! {error.message}</div>}
      {data && (
        <div>
          <h1>Fetched Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}



    <form className='post-test-form'   onSubmit={handlePostSubmit}>
        <div>
          <label>Title:</label>
          <input 
          className='post-input'
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <label>Description:</label>
          <input 
          className='post-input'
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <div>
          <label>Priority:</label>
          <input 
          className='post-input'
            type="number" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)} 
          />
        </div>
        <div>
          <label>Completed:</label>
          <select 
            className='post-input'
            value={completed} 
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
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


    <h1 className="h1-style">Enter ticker</h1>
      <input 
        type="text" 
        value={upbitInput} 
        onChange={handleUpbitInput} 
        placeholder="KRW-BTC" 
        className="input-text"
      />
      <button className="submit-button" 
       onClick={handleUpbitSubmit}>Submit</button>

      {upbitError && <div>Error!! {error.message}</div>}
      {upbitData && (
        <div>
          <h1 >Fetched Data</h1>
          <pre>{JSON.stringify(upbitData, null, 2)}</pre>
        </div>
      )}





    </div>
  );
}

export default DataFetchingComponent;
