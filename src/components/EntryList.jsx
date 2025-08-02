import EntryCard from "./EntryCard";

export default function EntryList({ entries, onDelete }) {
  if (!entries.length) {
    return <p className="text-gray-500 text-center">No entries yet.</p>;
  }

  return (
    <div className="mt-6">
      {[...entries].reverse().map((entry) => (
        <EntryCard key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </div>
  );
}