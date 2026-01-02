import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Subject from "./Subject";

export default function Semester() {
  const { subject } = useParams(); // this is the slug (physics, chemistry, etc.)
  const navigate = useNavigate();
  const semesters = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative z-10 pt-20 max-w-5xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl md:text-4xl text-center font-semibold mb-6 capitalize">
        {subject} — Select Semester
      </h1>

      <p className="text-gray-300 text-center mb-10">
        Choose your semester to access notes and study material.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {semesters.map((sem) => (
          <Link
            key={sem}
            to={`/subject/${subject}/${sem}`}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700
                       hover:border-blue-400 hover:bg-opacity-70
                       transition duration-300 text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Semester {sem}</h2>
            <p className="text-gray-400">View notes for semester {sem}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
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
  );
}
