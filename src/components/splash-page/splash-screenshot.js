//node_modules imports
import React from 'react';
import styled from 'styled-components';

// project imports
import { ReactComponent as ScreenshotSVG } from 'assets/img/screenshot.svg';

const SplashScreenshot = () => {
  return (
    <Screenshot>
      <ScreenshotContent>
        <IPhone>Screenshot</IPhone>
      </ScreenshotContent>
    </Screenshot>
  );
};

// private styled components
const Screenshot = styled.section`
  grid-area: screenshot;
  background-color: ${(props) => props.theme.color.secondary};
  background-color: transparent;
  margin-top: 3rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    padding-top: 75px;
  }
`;

const ScreenshotContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4834d4;
  padding: 50px 0;
  height: calc(100vh);
  box-shadow: rgba(72, 52, 212, 0.66) 1px 4px 50px,
    rgba(72, 52, 212, 0.66) -1px -4px 50px;
  @media only screen and (min-width: 1280px) {
    box-shadow: rgba(72, 52, 212, 0.66) -1px -10px 150px,
      rgba(72, 52, 212, 0.1) 0px 10px 150px;
    margin-right: auto;
    padding: 100px 50px;
  }
`;

const IPhone = styled(ScreenshotSVG)`
  width: auto;
  height: 100%;
`;

export default SplashScreenshot;
