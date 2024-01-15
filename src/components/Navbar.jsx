import { ROUTES } from "../constant/routes";
import { HashLink } from "react-router-hash-link";

const Navbar = (props) => {
  const { toggleSidebar } = props;
  return (
    <nav className="flex items-center justify-between z-10 bg-havelock-blue-200 w-full py-4 xl:px-24 lg:px-16 px-4 fixed text-havelock-blue-950">
      {/* Brand */}
      <HashLink
        smooth
        to={ROUTES.HOME_LANDING}
        className="flex items-center gap-2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <b className="md:text-xl text-lg font-family-secondary">Cooking Discovery</b>
      </HashLink>
      {/* Primary Navbar */}
      <div className="lg:block hidden space-x-8">
        <HashLink className="hover:underline" smooth to={ROUTES.HOME_LANDING}>
          Home
        </HashLink>
        <HashLink className="hover:underline" smooth to={ROUTES.HOME_CATEGORY}>
          Categories
        </HashLink>
        <HashLink className="hover:underline" smooth to={ROUTES.HOME_CONTACT}>
          Contact Us
        </HashLink>
      </div>
      {/* Mobile button */}
      <button
        onClick={() => toggleSidebar(true)}
        className="lg:hidden block border-2 border-havelock-blue-950 rounded px-3 py-2 hover:bg-havelock-blue-950 hover:text-white transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
