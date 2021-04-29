import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-50-600  ">
      <div className="w-full text-center py-5 items-center">
        <NavLink
          to="/"
          exact
          className="text-gray-500 text-2xl hover:underline font-light"
          activeClassName="text-gray-900 "
        >
          Latest News
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
