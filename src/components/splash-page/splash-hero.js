// node modules imports
import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

// hero for the splash page
const SplashHero = () => {
  return (
    <Hero>
      <Content>
        <Nav>
          <NavLink to="/">
            <LogoIcon icon={faRobot} color="tertiary" />
            <LogoIcon icon={faRobot} color="primary" />
            <LogoIcon icon={faRobot} color="accent" />
          </NavLink>
        </Nav>
        <h1>
          Think like a <span>crypto robo.</span>
        </h1>

        <p>
          Simulate popular investment strategies on Crypto coins{' '}
          <span>and benchmark your HODL.</span>
        </p>
        <CTAGroup>
          <PrimaryCTA to={'/settings'}>Simulate</PrimaryCTA>
          <SecondaryCTA href={'https://github.com/ajfryer/crypto-robos-client'}>
            Github
          </SecondaryCTA>
        </CTAGroup>
      </Content>
    </Hero>
  );
};

// private styled components
const Hero = styled.header`
  grid-area: hero;
  background-color: ${(props) => props.theme.color.tertiary};
  background-color: transparent;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  height: calc(100vh);
  padding: 1rem;
  /*box-shadow: rgba(190, 46, 221, 0.66) -100px -100px 100px -100px;*/
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    height: 100%;
    display: flex;

    border-top-left-radius: 42px;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem 0 1rem 0;
    color: white;
    font-weight: 900;

    span {
      display: table;
      margin: 0 auto;
    }
  }

  p {
    max-width: 640px;
    font-size: 1.25rem;
    font-weight: 300;
    color: #95afc0;
    line-height: 2.5rem;
    margin: 0 auto 3rem auto;

    span {
      display: table;
      margin: 0 auto;
      font-weight: 500;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.tablet}) {
    h1 {
      font-size: 6rem;
      margin: 1rem 0 2rem 0;
      color: white;
      font-weight: 900;
    }

    p {
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 2.5rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.desktop}) {
  }
`;

const LogoIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.color[props.color]};
`;

export const Nav = styled.nav`
  align-self: center;
  margin-bottom: 3rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.desktop}) {
  }
`;

const CTAGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-bottom: 0;
  width: calc(320px - 1rem);

  @media screen and (min-width: ${(props) => props.theme.breakpoint.tablet}) {
    width: 420px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.desktop}) {
  }
`;

const PrimaryCTA = styled(Link)`
  background-color: ${(props) => props.theme.color.accent};
  border: 1px solid ${(props) => props.theme.color.accent};
  box-shadow: rgba(34, 166, 179, 0.33) 1px 4px 150px,
    rgba(34, 166, 179, 0.33) -1px -4px 150px;
  border-radius: 0px;
  padding: 1.25rem 0;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: 900;
  width: 45%;
  max-width: 190px;

  @media screen and (min-width: ${(props) => props.theme.breakpoint.tablet}) {
    box-shadow: rgba(34, 166, 179, 0.5) 1px 4px 250px,
      rgba(34, 166, 179, 0.5) -1px -4px 250px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    box-shadow: rgba(34, 166, 179, 1) 1px 4px 350px,
      rgba(34, 166, 179, 0.1) -1px -4px 350px;
  }
`;

const SecondaryCTA = styled.a`
  background-color: transparent;
  border: 1px solid #95afc0;
  padding: 1.25rem 0;
  color: #95afc0;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 1rem;
  font-weight: 900;
  width: 45%;
  max-width: 190px;
  border-radius: 0px;
`;

export default SplashHero;
