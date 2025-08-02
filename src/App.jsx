import React, { useState, useEffect } from 'react';
import JournalEntryForm from './components/JournalEntryForm';
import EntryCard from './components/EntryCard';
import { analyzeSentiment } from './utils/sentiment';
import { getResponse } from './utils/responses';
import './App.css';

const LOCAL_STORAGE_KEY = 'sentinote_entries';

const App = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (content) => {
    const sentiment = analyzeSentiment(content);
    const comment = getResponse(sentiment);
    const entry = {
      id: Date.now(), // Add ID for deletion
      content,
      sentiment,
      comment,
      timestamp: new Date().toISOString(), // Use 'timestamp', not 'date'
    };
    setEntries([entry, ...entries]);
  };

  const handleDeleteEntry = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Sentinote 🧠</h1>
      <p className="app-subtitle">Because therapy is expensive, and sarcasm is free.</p>

      <JournalEntryForm onAddEntry={handleAddEntry} />

      <div className="entries-section">
        {entries.length === 0 ? (
          <p className="no-entries">
            No entries yet. Dump something, you repressed robot.
          </p>
        ) : (
          entries.map(entry => (
            <EntryCard key={entry.id} entry={entry} onDelete={handleDeleteEntry} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;