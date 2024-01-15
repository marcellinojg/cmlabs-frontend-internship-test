import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DefaultLayout = (props) => {
  const { children } = props;
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  useEffect(() => scrollTo({ top: 0 }), []);
  return (
    <>
      <header>
        <Navbar toggleSidebar={setIsSidebarActive} />
        <Sidebar active={isSidebarActive} toggleSidebar={setIsSidebarActive} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
