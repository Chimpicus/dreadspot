import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false)
  const [sidebarClass, setSidebarClass] = useState("sidebar-hidden")

  const toggleSidebar = () => {
    console.log("sidebar toggled")
    if (isToggled === false) {
      setIsToggled(true);
      setSidebarClass("sidebar-visible");
    }
    if (isToggled === true) {
      setIsToggled(false);
      setSidebarClass("sidebar-hidden")
    }
  }

  return (
    <div className="bg-dark">
      <nav id="nav" class="nav navbar navbar-expand navbar-dark px-2 py-0">
        <div class=" nav container-fluid">
          <Link href="/"><a class="nav-brand navbar-brand mx-2 py-0" href="/">DreadSpot</a></Link>
          <button class="navbar-toggler py-0 px-1 my-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="nav-toggler navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto m-0 px-2">
              <li class="nav-item">
                <Link href="/scenarios"><a class="nav-link">SCENARIOS</a></Link>
              </li>
              <li class="nav-item">
                <Link href="/about"><a class="nav-link">ABOUT</a></Link>
              </li>
              <li class="nav-item">
                <Link href="#"><a class="nav-link">OPTION</a></Link>
              </li>
              <li class="nav-item">
                <Link href="#"><a class="nav-link">OPTION</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* small nav  */}
      <nav id="nav-small" class="nav navbar navbar-dark px-2">
        <div class="container-fluid">
          <a class="nav-brand navbar-brand py-0" href="#">DreadSpot</a>
          <button class="navbar-toggler ms-auto p-0 px-2 border-0" type="button" onClick={() => { toggleSidebar() }}>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div id="sidebar" className={"navbar-dark bg-dark" + " " + sidebarClass}>
          <ul class="navbar-nav  m-0 my-2 px-3">
            <li class="nav-item">
              <Link href="/scenarios"><a class="nav-link">SCENARIOS</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/about"><a class="nav-link">ABOUT</a></Link>
            </li>
            <li class="nav-item">
              <Link href="#"><a class="nav-link">OPTION</a></Link>
            </li>
            <li class="nav-item">
              <Link href="#"><a class="nav-link">OPTION</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;