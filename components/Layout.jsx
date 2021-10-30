import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="conent">
      <Navbar />
      {children}

    </div>


  );
}

export default Layout;