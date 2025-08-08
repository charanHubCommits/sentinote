import React, { useState, useEffect } from 'react';
import JournalEntryForm from './components/JournalEntryForm';
import DateCard from './components/DateCard';
import SearchBar from './components/SearchBar';
import generateResponse from './utils/generateResponse';
import demoEntries from './data/entries.json';
import './App.css';

const LOCAL_STORAGE_KEY = 'sentinote_entries';

const App = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    // Load demo data if no saved entries
    return demoEntries;
  });

  const [filteredEntries, setFilteredEntries] = useState(entries);
  const [isLoading, setIsLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
    if (!searchActive) {
      setFilteredEntries(entries);
    }
  }, [entries, searchActive]);

  const handleAddEntry = async (content) => {
    setIsLoading(true);
    try {
      const { sentiment, comment } = await generateResponse(content);
      const entry = {
        id: Date.now(),
        content,
        sentiment,
        comment,
        timestamp: new Date().toISOString(),
      };
      setEntries([entry, ...entries]);
    } catch (error) {
      console.error('Error adding entry:', error);
      alert("Error analyzing sentiment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteEntry = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
  };

  const handleSearch = (searchTerm, filter) => {
    setSearchActive(true);
    const term = searchTerm.toLowerCase();
    
    let results = entries;
    
    switch (filter) {
      case 'content':
        results = entries.filter(entry => 
          entry.content.toLowerCase().includes(term) ||
          entry.comment.toLowerCase().includes(term)
        );
        break;
      case 'sentiment':
        results = entries.filter(entry => 
          entry.sentiment.toLowerCase().includes(term)
        );
        break;
      case 'date':
        results = entries.filter(entry => {
          const date = new Date(entry.timestamp).toLocaleDateString();
          return date.toLowerCase().includes(term);
        });
        break;
      default: // 'all'
        results = entries.filter(entry => 
          entry.content.toLowerCase().includes(term) ||
          entry.comment.toLowerCase().includes(term) ||
          entry.sentiment.toLowerCase().includes(term) ||
          new Date(entry.timestamp).toLocaleDateString().toLowerCase().includes(term)
        );
    }
    
    setFilteredEntries(results);
  };

  const handleClearSearch = () => {
    setSearchActive(false);
    setFilteredEntries(entries);
  };

  // Group entries by date
  const groupEntriesByDate = (entriesToGroup) => {
    const grouped = {};
    
    entriesToGroup.forEach(entry => {
      const date = new Date(entry.timestamp);
      const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(entry);
    });
    
    return grouped;
  };

  // Sort dates with today first, then by date (newest to oldest)
  const sortDates = (dates) => {
    const today = new Date().toISOString().split('T')[0];
    
    return dates.sort((a, b) => {
      if (a === today) return -1;
      if (b === today) return 1;
      return b.localeCompare(a); // Newest first
    });
  };

  const renderEntries = () => {
    const entriesToShow = searchActive ? filteredEntries : entries;
    
    if (entriesToShow.length === 0) {
      return (
        <p className="no-entries">
          {searchActive 
            ? "No entries found matching your search. Try different keywords or clear the search."
            : "No entries yet. Dump something, you repressed robot."
          }
        </p>
      );
    }

    const groupedEntries = groupEntriesByDate(entriesToShow);
    const sortedDates = sortDates(Object.keys(groupedEntries));

    return (
      <div className="date-cards-container">
        {sortedDates.map(date => (
          <DateCard
            key={date}
            date={date}
            entries={groupedEntries[date]}
            onDelete={handleDeleteEntry}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Sentinote 🧠</h1>
      <p className="app-subtitle">Because therapy is expensive, and sarcasm is free.</p>
      
      <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
      
      <JournalEntryForm onAddEntry={handleAddEntry} isLoading={isLoading} />
      
      <div className="entries-section">
        {searchActive && (
          <div className="search-results-info">
            <p>Found {filteredEntries.length} entry{filteredEntries.length !== 1 ? 's' : ''}</p>
          </div>
        )}
        
        {renderEntries()}
      </div>
    </div>
  );
};

export default App;