import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Header: React.FC = () => {
  return (
    <section className="flex justify-around items-center bg-white text-black p-3 sticky top-0 z-10">
      <div className="flex items-center ">
        <h2 className="mx-4 font-bold p-2 bg-gray-200 px-5 rounded-full">Influnecr-HUB</h2>
        <nav>
          <ul className="flex justify-between items-center gap-5 text-1xl">
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/about">Search</Link>
            </li>
            <li className="text-gray-800 p-4 hover:bg-white py-1">
              <Link to="/contact">Messages</Link>
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
      <div className="flex justify-center items-center gap-5">
        <div className="border-2 border-gray-200 p-1 rounded-full grid content-center cursor-pointer hover:bg-slate-200">
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-gray-800">Nathanim T</p>
          <div className="w-10 h-10 bg-gray-300 rounded-full mx-3">
            {/* <img
            src="https://randomuser.me/api/port"
            alt="profile"
            className="w-10 h-10 rounded-full"
          /> */}
          </div>
        </div>
        <div className="button flex justify-between items-center gap-5 border-l-2 p-3 border-gray-200">
          <Link className="px-5 py-1 " to={'/login'}>Login</Link>
          <Link className="px-5 py-1 bg-blue-500 text-white" to={'/register'}>Join</Link>
        </div>
      </div>
    </section>
  );
};