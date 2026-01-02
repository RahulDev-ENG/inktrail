import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Subject() {
  const { subject, semester } = useParams(); // physics | chemistry | maths
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${API}/api/notes?subject=${subject}&semester=${semester}`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [subject,semester]);

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
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/Semester/" + subject)}
            type="button"
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold border-4 border-white group"
          >
            <div className="bg-green-400 rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                />
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                />
              </svg>
            </div>
            <p className="translate-x-4">Go Back</p>
          </button>
        </div>
      </div>
    </div>
  );
}
