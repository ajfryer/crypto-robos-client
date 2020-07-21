import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
 * Loader Component
 * ================
 * - conditionally renders children components based on props.loaded
 * - helps us avoid errors that arise when rendering components before they have data!
 *
 */
const Loader = (props) => {
  //const themeContext = useContext(ThemeContext);
  //console.log('Current theme from loader: ', themeContext);
  /*
  if (props.loading) {
    return (
      <Container>
        <Spinner>{Array(12).fill(<div></div>)}</Spinner>
        loading!
      </Container>
    );
  } else {
    return <>{props.children}</>;
  }
  */

  const SpinnerDivs = new Array(12)
    .fill(null)
    .map((_, i) => <div key={i}></div>);

  return (
    <Container>
      <Spinner>{SpinnerDivs}</Spinner>
      loading!
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 20px;
`;

const Spinner = styled.div`
  color: ${(props) => props.theme.color.primary};
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;

  div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: ${(props) => props.theme.color.primary};
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

Loader.propTypes = {
  loaded: PropTypes.bool,
};

export default Loader;
