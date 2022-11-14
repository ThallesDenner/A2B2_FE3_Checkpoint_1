import "./styles.css";

const Header = () => (
  <header className="headerContainer">
    <nav className="menu">
      <ul className="menuItemList">
        <li className="menuItem submenu">
          <a className="menuItemLink" href="#">
            Item 1
          </a>
          <ul className="submenuItemList">
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 1.1
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 1.2
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 1.3
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 1.4
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 1.5
              </a>
            </li>
          </ul>
        </li>
        <li className="menuItem">
          <a className="menuItemLink" href="#">
            Item 2
          </a>
        </li>
        <li className="menuItem submenu">
          <a className="menuItemLink" href="#">
            Item 3
          </a>
          <ul className="submenuItemList">
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 3.1
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 3.2
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 3.3
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 3.4
              </a>
            </li>
            <li className="menuItem">
              <a className="menuItemLink" href="#" target="_blank">
                Item 3.5
              </a>
            </li>
          </ul>
        </li>
        <li className="menuItem">
          <a className="menuItemLink" href="#">
            Item 4
          </a>
        </li>
        <li className="menuItem">
          <a className="menuItemLink" href="#">
            Item 5
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
