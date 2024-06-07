import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OverlayComponent from './Overlay';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' }
];

const NavbarContainer = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 70px;
  padding: 60px 60px;

  @media (max-width: 780px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
    padding-top: 20px;
  }
`;

const Logo = styled(Link)`
  img {
    max-height: 40px;
  }

  @media (max-width: 780px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 780px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: row;
    list-style: none;
    padding: 0;
    gap: 20px;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    padding: 50px 0;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    z-index: 20;

  }
`;

const NavItem = styled.li`
  position: relative;
  list-style-type: none;

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    padding-bottom: 5px;
    position: relative;

    &:hover::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 50%;
      height: 2px;
      border-radius: 4px;
      background-color: white;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 780px) {
    display: block;
    position: absolute;
    left: 20px;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: black; 
    margin: 5px 0;
  }
`;

const DesktopNavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 40px;
  font-size: 17px;
  font-weight: 600;
  color: white;

  @media (max-width: 780px) {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavbarContainer>
            <OverlayComponent isOpen={isNavOpen} onClose={toggleNav} />

      <TopBar>
        <HamburgerButton onClick={toggleNav}>
          <img src="./images/icon-hamburger.svg" alt="Hamburger Menu" />
        </HamburgerButton>
        
        <Logo to="/">
          <img src={"./images/logo.svg"} alt="Logo" />
        </Logo>
      </TopBar>
      
      <NavList isOpen={isNavOpen}>
        <img onClick={toggleNav} style={{
          width: 18, paddingBottom: 5, marginLeft: 10
        }} src="./images/icon-close.svg" alt="Close Menu" />
        
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <Link 
              to={item.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.name}
            </Link>
          </NavItem>
        ))}
      </NavList>
      
      <DesktopNavList>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <Link 
              to={item.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.name}
              {hoveredIndex === index && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '25%',
                    width: '50%',
                    height: '2px',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                  }}
                />
              )}
            </Link>
          </NavItem>
        ))}
      </DesktopNavList>
    </NavbarContainer>
  );
};

export default Navbar;
