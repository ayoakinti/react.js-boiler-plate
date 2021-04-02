import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"

type IProps = {
  mobileSideMenu: boolean,
  closeSideMenuContainer: any
}

function SideMenu({ mobileSideMenu, closeSideMenuContainer }: IProps) {

  const closeSideMenu = () => {
    closeSideMenuContainer();
  }
  
  return (
    <div>
      <div className={`mobile-sidemenu-mask ${mobileSideMenu ? 'show': ''}`} onClick={closeSideMenu}></div>
      <aside className={`left-sidebar ${mobileSideMenu? 'mobile-show': ''}`}>
        <div className="brand-logo mt-2 mb-0">
          <img src={logo} alt="brandlogo"></img>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="sidebar-item" onClick={closeSideMenu}>
              <NavLink className="sidebar-link" to="/dashboard">
                <span className="">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={closeSideMenu}>
              <NavLink className="sidebar-link" to="/about">
                <span className="">About</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideMenu;
