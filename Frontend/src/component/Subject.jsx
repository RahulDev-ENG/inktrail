import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Subject() {
  const { subject } = useParams(); // physics | chemistry | maths
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:5000/api/notes?subject=${subject}`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [subject]);

  if (loading) {
    return <div className="pt-20 text-white text-center">Loading...</div>;
  }

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-10 text-white">
      <h1 className="text-2xl font-semibold mb-6 capitalize">
        {subject} Notes
      </h1>

      {notes.length === 0 && <p className="text-gray-400">No notes found</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {notes.map((note) => (
          <div
            key={note._id}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-1">{note.title}</h2>

            <p className="text-sm text-gray-300 mb-2">{note.semester}</p>

            <p className="mb-4">{note.description}</p>

            <a
              href={note.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
