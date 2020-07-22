// node_modules imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// project imports
import Navbar from 'components/common/navbar';
import SettingsForm from 'components/settings-page/settings-form';
import SimulationContext from 'contexts/context';
import Loading from 'components/common/loading';

const SettingsPage = () => {
  let { simulation } = useContext(SimulationContext);
  return simulation ? (
    <Background>
      <Page>
        <Navbar />
        <SettingsHero>
          <h1>
            Hello, let's build a <span>crypto robo</span>
          </h1>
        </SettingsHero>
        <SettingsForm />
      </Page>
    </Background>
  ) : (
    <Loading />
  );
};

const Background = styled.div`
  color: ${(props) => props.theme.color.tertiary};
`;

const Page = styled.div`
  padding-bottom: 6rem;
  margin: 0 auto;
  color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.secondary};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
  }
`;

const SettingsHero = styled.section`
  padding: 1rem 0 2rem 0;
  background-color: ${(props) => props.theme.color.secondary};
  display: flex;
  align-items: center;

  h1 {
    text-align: center;
    margin: 0;
    color: white;
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;
    margin: 0 auto 0 auto;
    font-weight: 500;

    span {
      color: ${(props) => props.theme.color.tertiary};
      font-weight: 300;
      text-shadow: rgba(190, 46, 221, 1) 0px 1px 10px;
    }
  }
`;

export default SettingsPage;
