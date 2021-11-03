import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <div className="page">
        {children}
      </div>
    </div>


  );
}

export default Layout;