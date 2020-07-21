import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const SplashNav = () => {
  return (
    <Nav>
      <Content>
        <NavLink to="/">
          <LogoIcon icon={faRobot} color="accent" />
          <LogoIcon icon={faRobot} color="primary" />
          <LogoIcon icon={faRobot} color="tertiary" />
        </NavLink>
      </Content>
    </Nav>
  );
};

// private styled components
export const Nav = styled.nav`
  grid-area: nav;
  background-color: ${(props) => props.theme.color.tertiary};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-top-left-radius: 25px;
  @media only screen and (min-width: 1280px) {
    width: calc(66.66vw - 50px);
    background-color: ${(props) => props.theme.color.secondary};
    margin-left: auto;
    margin-top: 50px;
    height: calc(100% - 50px);
    align-items: center;
    padding-left: 50px;
  }
  a {
    margin-right: 3rem;
  }
`;

const LogoIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.color[props.color]};
`;

export default SplashNav;
