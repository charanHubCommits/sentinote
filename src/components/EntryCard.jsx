import React from 'react';
import './EntryCard.css'; // Create this if you haven’t

const EntryCard = ({ entry, onDelete }) => {
  const { content, sentiment, comment, timestamp, id } = entry;
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className={`entry-card sentiment-${sentiment.toLowerCase()}`}>
      <div className="entry-header">
        <span className="entry-date">{date}</span>
        <button className="delete-btn" onClick={() => onDelete(id)}>🗑</button>
      </div>
      <p className="entry-content">{content}</p>
      <p className="entry-comment">“{comment}”</p>
    </div>
  );
};

export default EntryCard;