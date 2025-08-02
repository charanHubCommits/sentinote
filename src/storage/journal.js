const STORAGE_KEY = 'sentinote_journal_entries';

export function getJournalEntries() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to read journal entries:', err);
    return [];
  }
}

export function saveJournalEntry(entry) {
  try {
    const entries = getJournalEntries();
    entries.unshift(entry); // Add new entry at top
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error('Failed to save journal entry:', err);
  }
}

export function deleteJournalEntry(timestamp) {
  try {
    const entries = getJournalEntries().filter(e => e.timestamp !== timestamp);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error('Failed to delete journal entry:', err);
  }
}

export function clearAllJournalEntries() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear journal entries:', err);
  }
}