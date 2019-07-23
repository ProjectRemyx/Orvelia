import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class NavbarPage extends Component {
    state = {
        isOpen: false
    };
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
  render() {
  return (
    <MDBNavbar color="transparent" light expand="md">
      <MDBNavbarBrand>
        <img src={require('../../imgs/sock.jpg')} style={{  maxWidth: '30px' }} alt="Happy Sock"/>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="#!">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-md-inline-block">Heroes</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">All</MDBDropdownItem>
                <MDBDropdownItem href="#!">Knights</MDBDropdownItem>
                <MDBDropdownItem href="#!">Warriors</MDBDropdownItem>
                <MDBDropdownItem href="#!">Assassins</MDBDropdownItem>
                <MDBDropdownItem href="#!">Archers</MDBDropdownItem>
                <MDBDropdownItem href="#!">Mechanics</MDBDropdownItem>
                <MDBDropdownItem href="#!">Wizards</MDBDropdownItem>
                <MDBDropdownItem href="#!">Priests</MDBDropdownItem>                
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-md-inline">Equipment</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">UW</MDBDropdownItem>
                <MDBDropdownItem href="#!">UT</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-md-inline">Raid</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">Black Dragon</MDBDropdownItem>
                <MDBDropdownItem href="#!">Red Dragon</MDBDropdownItem>
                <MDBDropdownItem href="#!">Ice Dragon</MDBDropdownItem>
                <MDBDropdownItem href="#!">Poison Dragon</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-md-inline">GC</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">Tyrfas</MDBDropdownItem>
                <MDBDropdownItem href="#!">Lakreil</MDBDropdownItem>
                <MDBDropdownItem href="#!">Velkazar</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-md-inline">WB</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">Mountain Fortress</MDBDropdownItem>
                <MDBDropdownItem href="#!">Protianus</MDBDropdownItem>
                <MDBDropdownItem href="#!">Xanadus</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">PvP</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBDropdown className="nav-contact">
              <MDBDropdownToggle nav caret>
                <div className="d-md-inline">Contact</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" >
                <MDBDropdownItem href="#!">Website</MDBDropdownItem>
                <MDBDropdownItem href="#!">Github</MDBDropdownItem>
                <MDBDropdownItem href="#!">Twitter</MDBDropdownItem>
                <MDBDropdownItem href="#!">Donate</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;