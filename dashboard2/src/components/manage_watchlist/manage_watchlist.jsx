import React, { useState } from 'react';
import axios from 'axios';
import './manage_watchlist.css'; // Assuming this is where your custom CSS is located

const ManageWatchlistComponent = () => {
  const [postSymbolInput, setPostSymbolInput] = useState('');
  const [deleteSymbolInput, setDeleteSymbolInput] = useState('');
  const [postResponseText, setPostResponseText] = useState('');
  const [deleteResponseStatusCode, setDeleteResponseStatusCode] = useState(null);

  const handlePostSymbolChange = (event) => {
    setPostSymbolInput(event.target.value);
  };

  const handleDeleteSymbolChange = (event) => {
    setDeleteSymbolInput(event.target.value);
  };

  const handlePostFormSubmit = async (event) => {
    event.preventDefault();

    const url = "https://paper-api.alpaca.markets/v2/watchlists/604bda03-b29e-44b4-9fb1-70ecdb18a5be"; // Replace with your API endpoint
    const payload = { symbol: postSymbolInput };
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "APCA-API-KEY-ID": "PKPUP50BSE5HXH56A1G8",
      "APCA-API-SECRET-KEY": "Fre2uD7RGUiYWiik0CDnfzLs8YDV1ydnqxcGE0X2"
      // Replace with your actual API keys
    };

    try {
      const response = await axios.post(url, payload, { headers });
      setPostResponseText(response.status); // Assuming response.data is JSON
    } catch (error) {
      console.error('Error:', error);
      setPostResponseText('Error occurred, check console for details.');
    }
  };

  const handleDeleteFormSubmit = async (event) => {
    event.preventDefault();

    const url = `https://paper-api.alpaca.markets/v2/watchlists/604bda03-b29e-44b4-9fb1-70ecdb18a5be/${deleteSymbolInput}`; // Replace with your API endpoint
    const headers = {
      "Accept": "application/json",
      "APCA-API-KEY-ID": "PKPUP50BSE5HXH56A1G8",
      "APCA-API-SECRET-KEY": "Fre2uD7RGUiYWiik0CDnfzLs8YDV1ydnqxcGE0X2"
      // Replace with your actual API keys
    };

    try {
      const response = await axios.delete(url, { headers });
      setDeleteResponseStatusCode(response.status); // Set status code for successful deletion
    } catch (error) {
      console.error('Error:', error);
      setDeleteResponseStatusCode(error.response ? error.response.status : 'Unknown error');
    }
  };

  return (
    <div className="container">
      <div className="request-section">
        <form onSubmit={handlePostFormSubmit} className="form-group">
          <label htmlFor="postSymbolInput">Enter Symbol for POST:</label>
          <input
            type="text"
            id="postSymbolInput"
            value={postSymbolInput}
            onChange={handlePostSymbolChange}
            className="input-field"
          />
          <button type="submit" className="post-button">POST</button>
        </form>
        <pre>{postResponseText}</pre>
      </div>
      <div className="request-section">
        <form onSubmit={handleDeleteFormSubmit} className="form-group">
          <label htmlFor="deleteSymbolInput">Enter Symbol for DELETE:</label>
          <input
            type="text"
            id="deleteSymbolInput"
            value={deleteSymbolInput}
            onChange={handleDeleteSymbolChange}
            className="input-field"
          />
          <button type="submit" className="delete-button">DELETE</button>
        </form>
        {deleteResponseStatusCode !== null && (
          <div className="status-code">
            Status Code: {deleteResponseStatusCode}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageWatchlistComponent;
