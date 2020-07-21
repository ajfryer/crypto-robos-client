import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

// project imports
import SimulationContext from 'contexts/context';

const ResultsNav = () => {
  const { simulation } = useContext(SimulationContext);
  return (
    <Nav>
      <BrandLink exact to="/">
        <LogoIcon icon={faRobot} color="accent" />
        <LogoIcon icon={faRobot} color="primary" />
        <LogoIcon icon={faRobot} color="tertiary" />
        <BrandName>Crypto Robos</BrandName>
      </BrandLink>
      <RunLink to="/run">Simulator</RunLink>
      {simulation.data.length !== 0 && <NavLink to="/results">Results</NavLink>}
    </Nav>
  );
};

// private styled components
const Nav = styled.nav`
  grid-area: nav;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4834d4;
  background-color: #130f40;
  color: white;
  padding: 0 0.5rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1rem;
  }

  .active {
    position: relative;
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    justify-content: flex-start;
    a {
      margin-right: 2.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    a {
      margin-right: 3.5rem;
    }
  }
`;

const BrandLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const RunLink = styled(NavLink)``;

const BrandName = styled.div`
  color: ${({ theme }) => theme.color.accent};
  color: rgba(255, 255, 255, 1);

  font-weight: 900;
  text-transform: capitalize;
  letter-spacing: 0.75px;
  font-size: 1rem;
  font-size: 1.25rem;
  margin-left: 0.25rem;
`;

const LogoIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
  font-size: 1.5em;
  color: ${(props) => props.theme.color[props.color]};
  margin-bottom: 0.5rem;
`;

export default ResultsNav;
