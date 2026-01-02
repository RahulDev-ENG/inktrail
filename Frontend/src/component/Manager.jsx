import { Link } from "react-router-dom";
import Input from "./StyleComponent";

const subjects = [
  { name: "Mathematics", slug: "maths" },
  { name: "Physics", slug: "physics" },
  { name: "Chemistry", slug: "chemistry" },
];

export default function Manager() {
  return (
    <div className="relative z-10 pt-20 max-w-7xl mx-auto px-6 py-10 text-white ">
      <h1 className="md:text-4xl text-center mb-5 text-3xl">
        Welcome to INktrail
      </h1>
      <p className=" mb-8 text-base text-justify md:text-lg">
        InkTrail is a public academic resource website that allows students to
        browse study notes by subject and semester. It offers fast,
        browser-based access to educational materials for university and college
        coursework. —   (Gauhati University / Affiliated college's )
      </p>
      <h1 className="text-2xl font-semibold mb-8 mt-8">Major Subjects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {subjects.map((sub) => (
          <Link
            key={sub.slug}
            to={`/semester/${sub.slug}`}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border  border-gray-700 hover:border-blue-400
                       hover:bg-opacity-70 transition duration-300"
          >
            <h2 className="text-2xl font-semibold">{sub.name}</h2>
            <p className="text-gray-300 mt-2">View all {sub.name} notes</p>
          </Link>
        ))}
      </div>

      <Input />
    </div>
  );
}
