


import React, { useState } from 'react';
import { Nav, NavItem, Button, NavLink } from 'reactstrap';

const NavBar  = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <Button>

          <NavLink  href="/about" active>About</NavLink>
          </Button>
        </NavItem>
        {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>About</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/portfolio"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="/">Disabled Link</NavLink>
        </NavItem> */}
      </Nav>
    </div>
  );
}

export default NavBar;