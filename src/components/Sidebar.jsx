import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useOnClickOutside } from "usehooks-ts";
import { ROUTES } from "../constant/routes";
import { FaHome, FaPhone } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";

const Sidebar = (props) => {
  const { active, toggleSidebar } = props;
  const sidebarRef = useRef(null);
  useOnClickOutside(sidebarRef, () => toggleSidebar(false));

  return (
    <>
      <div
        className={`bg-black bg-opacity-40 h-[100dvh] w-full fixed z-10 ${
          active ? "block" : "hidden"
        }`}
      >
        <div
          ref={sidebarRef}
          className="md:w-1/2 w-10/12 fixed right-0 h-full from-havelock-blue-200 to-havelock-blue-300 bg-gradient-to-br flex flex-col items-center justify-start pt-24"
        >
          <div className="flex items-center gap-2">
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
            <b className="md:text-xl text-lg font-family-secondary">
              Cooking Discovery
            </b>
          </div>
          <div className="flex flex-col gap-4 mt-12 w-10/12">
            <HashLink
              className="flex items-center gap-2 border-b-2 border-havelock-blue-950 py-2"
              smooth
              to={ROUTES.HOME_LANDING}
              onClick={() => toggleSidebar(false)}
            >
              <FaHome />
              Home
            </HashLink>
            <HashLink
              className="flex items-center gap-2 border-b-2 border-havelock-blue-950 py-2"
              smooth
              to={ROUTES.HOME_CATEGORY}
              onClick={() => toggleSidebar(false)}
            >
              <BiSolidFoodMenu />
              Categories
            </HashLink>
            <HashLink
              className="flex items-center gap-2 border-b-2 border-havelock-blue-950 py-2"
              smooth
              to={ROUTES.HOME_CONTACT}
              onClick={() => toggleSidebar(false)}
            >
              <FaPhone />
              Contact Us
            </HashLink>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path
              fill="#374671"
              fill-opacity="1"
              d="M0,224L48,192C96,160,192,96,288,80C384,64,480,96,576,128C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
