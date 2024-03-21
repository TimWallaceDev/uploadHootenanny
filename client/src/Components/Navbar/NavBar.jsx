import { NavLink } from "react-router-dom";
import './NavBar.scss';
import Logo from '../../assets/hacklogo.png';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <img className="nav-bar__logo" src={Logo} alt="" />
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink className='text' to="/">Home</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink className='text' to="/upload">Upload</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink className='text' to="/gallery/all">Gallery</NavLink>
        </li>
      </ul>
    </div>
  );
}
