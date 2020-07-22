//node modules
import React from 'react';
import styled from 'styled-components';

const SplashFooter = () => {
  return (
    <Footer>
      <FooterContent>
        <h4>crypto robos 2020</h4>
        <p>
          This personal project does not manage money or offer investment
          advice. It's strictly an informational tool to run hypothetical
          simulated backtests. I've tried to ensure data accuracy, but I make no
          guarantee.
        </p>
        <p>
          Want to chat?{' '}
          <a href="https://ajfryer.github.io/personal-portfolio/">
            Let's get in touch.
          </a>
        </p>
      </FooterContent>
    </Footer>
  );
};

//private styled components
const Footer = styled.footer`
  grid-area: footer;
  background-color: ${(props) => props.theme.color.tertiary};
  background-color: transparent;

  z-index: 0;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    min-height: 100%;
  }
`;

const FooterContent = styled.div`
  padding: 3rem 2rem;
  line-height: 1.625rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #95afc0;
  text-align: center;
  font-weight: 300;
  max-width: 1280px;
  margin: 0 auto;

  h4 {
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    margin: 0rem 0 1rem 0;
  }

  a {
    text-shadow: 0px 1px 10px rgba(34, 166, 179, 1);
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoint.tablet}) {
    padding: 4rem 2rem;
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoint.desktop}) {
    border-bottom-right-radius: 42px;
  }
`;

export default SplashFooter;
