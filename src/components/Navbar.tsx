import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav style={{
      position: "absolute",
      width: "100%",
      top: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      gap: 70,
      padding: "60px 60px"
    }}>
      <Link to="/">
        <img src={"./images/logo.svg"} alt="Logo" />
      </Link>      <ul style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
        gap: 40,
        fontSize: 17,
        fontWeight: 600
      }}>
        {navItems.map((item, index) => (
          <li key={index} style={{ position: 'relative' }}>
            <Link to={item.path} style={{ color: "white", textDecoration: "none", display: 'block', paddingBottom: '5px', position: 'relative' }}
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
