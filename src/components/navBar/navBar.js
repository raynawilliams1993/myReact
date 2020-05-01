import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="/about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/portfolio">Portfolio</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink disabled href="/">Disabled Link</NavLink>
        </NavItem> */}
      </Nav>
      <hr />
      {/* <p>Link based</p>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav> */}
    </div>
  );
}

export default NavBar;