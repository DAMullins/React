import React, { useState } from 'react';
import axios from 'axios';

const QueryForm = () => {
  const [query, setQuery] = useState('SELECT * FROM items WHERE id = 1');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(null); // Clear previous data
    setError(null); // Clear previous error

    try {
      const response = await axios.post('https://yourdomain.com/api.php', {
        sql: query // The SQL query to send
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setData(response.data); // Set the response data
    } catch (err) {
      setError('Failed to fetch data: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h1>Send a Query</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter SELECT query"
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Run Query</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>Results:</h2>
          <ul>
            {Array.isArray(data) ? (
              data.map((item, index) => (
                <li key={index}>{JSON.stringify(item)}</li> // Adjust based on your data structure
              ))
            ) : (
              <li>{JSON.stringify(data)}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QueryForm;