// node_modules imports
import React from 'react';
import styled from 'styled-components';

// project imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faCircle,
  faChartLine,
  faCalendarAlt,
  faUsers,
  faHeart,
  faBrain,
} from '@fortawesome/free-solid-svg-icons';

const SplashFeatures = () => {
  return (
    <Features>
      <Content>
        <Feature>
          {' '}
          <div>
            <FeatureIcon className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} color="#eceafa" />
              <FontAwesomeIcon
                icon={faRobot}
                color="#4834d4"
                transform="shrink-8"
              />
            </FeatureIcon>
          </div>
          <div>
            <h3>Simulate Robo Strategies</h3>
            <p>
              Robos invest based on past market data. Simulate equal weight,
              risk parity, or minimum variance robo strategies, all industry
              standards.
            </p>
          </div>
        </Feature>
        <Feature>
          {' '}
          <div>
            <FeatureIcon className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} color="#eceafa" />
              <FontAwesomeIcon
                icon={faChartLine}
                color="#4834d4"
                transform="shrink-8"
              />
            </FeatureIcon>
          </div>
          <div>
            <h3>Benchmark Your HODL</h3>
            <p>
              Robos strategies make great benchmarks for your HODL or custom
              strategy. How does your return on risk compare?
            </p>
          </div>
        </Feature>
        <Feature>
          {' '}
          <div>
            <FeatureIcon className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} color="#eceafa" />
              <FontAwesomeIcon
                icon={faUsers}
                color="#4834d4"
                transform="shrink-8"
              />
            </FeatureIcon>
          </div>
          <div>
            <h3>For The Community</h3>
            <p>
              This is a free site for all crypto investors. Public benchmarks
              are important for crypto to grow as an asset class.
            </p>
          </div>
        </Feature>
        <Feature>
          {' '}
          <div>
            <FeatureIcon className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} color="#eceafa" />
              <FontAwesomeIcon
                icon={faHeart}
                color="#4834d4"
                transform="shrink-8"
              />
            </FeatureIcon>
          </div>
          <div>
            <h3>Thank You Providers</h3>
            <p>
              Free crypto market data from{' '}
              <a href="https://www.alphavantage.co/">AlphaVantage</a>. Free
              hosting from <a href="https://vercel.com/">Vercel</a> and{' '}
              <a href="https://www.heroku.com/">Heroku</a>. Free icons from{' '}
              <a href="https://fontawesome.com//">Font Awesome</a>. Support
              these great providers!
            </p>
          </div>
        </Feature>
        <Feature>
          {' '}
          <div>
            <FeatureIcon className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} color="#eceafa" />
              <FontAwesomeIcon
                icon={faCalendarAlt}
                color="#4834d4"
                transform="shrink-8"
              />
            </FeatureIcon>
          </div>
          <div>
            <h3>More Coming Soon</h3>
            <p>
              More cryptos, strategies, and features are coming in the near
              future. Want to see something particular?{' '}
              <a href="https://ajfryer.github.io/personal-portfolio/">
                Please get in touch.{' '}
              </a>
            </p>
          </div>
        </Feature>

        <Feature>
          {' '}
          <div>
            <FeatureIcon className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} color="#eceafa" />
              <FontAwesomeIcon
                icon={faBrain}
                color="#4834d4"
                transform="shrink-8"
              />
            </FeatureIcon>
          </div>
          <div>
            <h3>Please Be Responsible</h3>
            <p>
              This site gives no investment advice and the data are simulated
              indicies. Investing is risky, so please use these benchmarks
              wisely!
            </p>
          </div>
        </Feature>
      </Content>
    </Features>
  );
};

//private styled components
const Features = styled.section`
  grid-area: features;
  height: 100%;
  background-color: #4834d4;
  background-color: transparent;
  padding: 0 0px 50px 0px;
  z-index: 1;
  padding: 3rem 0rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    padding: 6rem;
  }
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem 0rem;
  /*box-shadow: rgba(72, 52, 212, 0.66) -125px 125px 100px -100px;
  padding: 1.5rem 0;*/
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1280px) {
    height: calc(100%);

    margin-left: auto;
    padding: 3rem 2rem;
  }
`;

const Feature = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    color: #130f40;
    font-weight: 900;
    margin: 0.5rem auto;
  }

  p {
    color: #535c68;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2rem;
    margin: 0;
  }

  a {
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 45%;
  }
`;

const FeatureIcon = styled.span`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
`;

export default SplashFeatures;
