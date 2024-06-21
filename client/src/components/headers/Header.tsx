import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <section className="flex justify-around items-center bg-white text-black p-3">
      <div>
        <h2>logo</h2>
      </div>
      <div>
        <nav>
          <ul className="flex justify-between items-center gap-5 text-1xl">
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/about">About</Link>
            </li>
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
