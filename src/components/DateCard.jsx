import React, { useState } from 'react';
import EntryCard from './EntryCard';
import './DateCard.css';

const DateCard = ({ date, entries, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isToday = (date) => {
    const today = new Date();
    const entryDate = new Date(date);
    return (
      today.getFullYear() === entryDate.getFullYear() &&
      today.getMonth() === entryDate.getMonth() &&
      today.getDate() === entryDate.getDate()
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (isToday(dateString)) {
      return 'Today';
    } else if (
      date.getFullYear() === yesterday.getFullYear() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getDate() === yesterday.getDate()
    ) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  const getDateIcon = (dateString) => {
    if (isToday(dateString)) {
      return '📅';
    } else {
      return '📆';
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`date-card ${isToday(date) ? 'today' : ''}`}>
      <div className="date-header" onClick={handleToggle}>
        <div className="date-info">
          <span className="date-icon">{getDateIcon(date)}</span>
          <div className="date-details">
            <h3 className="date-title">{formatDate(date)}</h3>
            <span className="entry-count">{entries.length} entr{entries.length === 1 ? 'y' : 'ies'}</span>
          </div>
        </div>
        <div className="date-actions">
          <button className="toggle-btn">
            {isExpanded ? '▼' : '▶'}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="date-entries">
          {entries.map(entry => (
            <EntryCard 
              key={entry.id} 
              entry={entry} 
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DateCard;
