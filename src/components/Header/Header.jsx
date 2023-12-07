import { Link, NavLink, useLocation} from 'react-router-dom';

import './header.css';
import menues from './menu.json';

const Header = () => {
  const location= useLocation();
  const windowPath = window.location.pathname;
  const renderSubmenu = (submenus) => (
    <ul>
      {submenus.map((submenu) => (
        <li key={submenu.id}>
          <NavLink to={submenu.link} activeClassName='active'>{submenu.label}</NavLink>
        </li>
      ))}
    </ul>
  );

  const renderMenu = (menu) => (
    <li key={menu.id}>
      <NavLink to={menu.link} activeClassName="active">{menu.label}</NavLink>
      {menu.submenus && renderSubmenu(menu.submenus)}
    </li>
  );

  const menusUx = menues.map(renderMenu);

  return (
    <header>
      <img src="./src/assets/mercysAssociates.png" alt="" />
      <nav>
        <ul>{menusUx}</ul>
      </nav>
    </header>
  );
};

export default Header;
