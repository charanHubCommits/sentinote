import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm, searchFilter);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchFilter('all');
    onClear();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search your journal entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="search-filter"
          >
            <option value="all">All Entries</option>
            <option value="content">Content Only</option>
            <option value="sentiment">Sentiment</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div className="search-buttons">
          <button type="submit" className="search-btn">
            🔍 Search
          </button>
          {searchTerm && (
            <button type="button" onClick={handleClear} className="clear-btn">
              ✕ Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
