import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

// project imports
import SimulationContext from 'contexts/context';

const Navbar = () => {
  const { simulation } = useContext(SimulationContext);
  return (
    <Nav>
      <BrandLink exact to="/">
        <Logo>
          <LogoIcon icon={faRobot} color="accent" />
          <LogoIcon icon={faRobot} color="primary" />
          <LogoIcon icon={faRobot} color="tertiary" />
        </Logo>
        <BrandName>Crypto Robos</BrandName>
      </BrandLink>
      <NavLinks>
        <RunLink to="/settings">Settings</RunLink>
        {(simulation.data.length !== 0 || simulation.loaded.false) && (
          <NavLink to="/simulation">Simulation</NavLink>
        )}
      </NavLinks>
    </Nav>
  );
};

// private styled components
const Nav = styled.nav`
  grid-area: nav;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  color: white;
  padding: 2rem 0.5rem;
  margin: 0 auto;
  a {
    color: ${({ theme }) => theme.color2.grey};
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1rem;
  }

  .active {
    color: rgba(255, 255, 255, 1);
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    justify-content: flex-start;
    a {
    }
    height: 75px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    a {
    }
  }
`;

const Logo = styled.div``;

const BrandLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 0rem;
`;

const NavLinks = styled.div`
  margin-left: auto;

  a {
    margin-left: 3rem;
  }
`;

const RunLink = styled(NavLink)`
  margin-right: 1rem;
`;

const BrandName = styled.div`
  display: none;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.color.accent};
    color: rgba(255, 255, 255, 1);

    font-weight: 900;
    text-transform: capitalize;
    letter-spacing: 0.75px;
    font-size: 1rem;

    margin-left: 0.25rem;
  }
`;

const LogoIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
  font-size: 1.25em;
  color: ${(props) => props.theme.color[props.color]};
  margin-bottom: 0.5rem;
`;

export default Navbar;
