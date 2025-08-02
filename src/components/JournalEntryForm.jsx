import { useState } from "react";

export default function JournalEntryForm({ onAddEntry }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onAddEntry(content); // Let App.js handle sentiment & response
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="journal-form">
  <textarea
    className=""
    rows="5"
    placeholder="Write today's thoughts..."
    value={content}
    onChange={(e) => setContent(e.target.value)}
  />
  <button type="submit">Add Entry</button>
</form>
  );
}