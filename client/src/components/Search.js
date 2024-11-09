import '../styles.css';
// components/Search.js
import React, { useState } from 'react';
import { fetchData } from '../utils/api';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await fetchData(`/api/search?q=${query}`);
      setResults(data);
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
