// node_modules imports
import React from 'react';
import styled from 'styled-components';

// project imports
import ErrorBoundary from 'components/common/error-boundary';
import SplashHero from 'components/splash-page/splash-hero';
import SplashScreenshot from 'components/splash-page/splash-screenshot';
import SplashFeatures from 'components/splash-page/splash-features';
import SplashFooter from 'components/splash-page/splash-footer';

const SplashPage = (props) => {
  return (
    <PageWrapper>
      <ErrorBoundary>
        <Main>
          <SplashHero />
          <SplashScreenshot />
          <SplashFeatures />
          <SplashFooter />
        </Main>
      </ErrorBoundary>
    </PageWrapper>
  );
};

// private styled components
const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 0rem 0.5rem;
  box-shadow: inset rgba(190, 46, 221, 0.33) 0px 1px 150px;

  @media only screen and (min-width: 1280px) {
    padding: 50px;
    box-shadow: none;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-areas:
    'hero'
    'screenshot'
    'features'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 0rem;
  row-gap: 0rem;

  @media only screen and (min-width: 1280px) {
    box-shadow: rgba(190, 46, 221, 0.33) 0px 4px 150px;
    display: grid;
    grid-template-areas:
      'hero screenshot'
      'features features'
      'footer footer';
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    grid-gap: 0rem;
    row-gap: 0rem;
  }
`;

export default SplashPage;
