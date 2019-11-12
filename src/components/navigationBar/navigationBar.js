import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
import {Link} from 'react-router-dom'

// import NotificationBadge from 'react-notification-badge';
// import {Effect} from 'react-notification-badge';

const NavigationBar = (props) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Test</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <div>
                <Link to='/cart'>
                  <i className="fas fa-shopping-cart shoppingCart">
                    {/*<NotificationBadge count={this.state.count} effect={Effect.SCALE}/>*/}
                  </i>
                </Link>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;