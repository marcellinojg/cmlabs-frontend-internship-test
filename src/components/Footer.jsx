import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="from-havelock-blue-200 to-havelock-blue-400 bg-gradient-to-br text-havelock-blue-950">
      <div className="grid lg:grid-cols-2 grid-cols-1 py-12 xl:px-24 lg:px-16 px-8 gap-4">
        <div className="space-y-2">
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
            <b className="text-xl font-family-secondary">Cooking Discovery</b>
          </div>
          <p className="2xl:mr-48 xl:mr-24 lg:mr-12">
            Explore flavors, savor moments, and create delicious memories with
            our handpicked recipes. Let the joy of cooking inspire your next
            culinary masterpiece!
          </p>
        </div>
        <div className="space-y-2" id="contact">
          <b className="text-xl">Contact Us</b>
          <span className="flex items-center gap-2">
            <FaRegEnvelope className="text-xl" />
            admin@cookingdiscovery.id
          </span>
          <span className="flex items-center gap-2">
            <FaInstagram className="text-xl" />
            @cookingdiscover.id
          </span>
          <span className="flex items-center gap-2">
            <FaYoutube className="text-xl" />
            Cooking Discovery Channel
          </span>
        </div>
      </div>
      <div className="bg-havelock-blue-400 py-4 xl:px-24 lg:px-16 px-8 flex items-center justify-between md:flex-row flex-col gap-4">
        <span className="font-bold text-center"> 2024 © Cooking Discovery. <br className="md:hidden block"/> All Rights Reserved.</span>
        <div className="flex items-center gap-4">
            <a href="mailto:marcellinojg06@gmail.com" target="_blank" className="rounded-full shadow w-12 h-12 grid place-items-center bg-havelock-blue-950 hover:bg-havelock-blue-900 transition duration-300 text-white">
                <FaEnvelope/>
            </a>
            <a href="https://www.instagram.com/marcellinojg_" target="_blank" className="rounded-full shadow w-12 h-12 grid place-items-center bg-havelock-blue-950 hover:bg-havelock-blue-900 transition duration-300 text-white">
                <FaInstagram/>
            </a>
            <a href="https://www.linkedin.com/in/marcellinojg" target="_blank" className="rounded-full shadow w-12 h-12 grid place-items-center bg-havelock-blue-950 hover:bg-havelock-blue-900 transition duration-300 text-white">
                <FaLinkedin/>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
