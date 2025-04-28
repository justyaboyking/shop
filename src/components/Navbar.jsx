import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4B0082;
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Logo to="/">DROP ZONE</Logo>
      <NavLinks>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
}