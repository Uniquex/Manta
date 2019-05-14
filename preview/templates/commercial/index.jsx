// React Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Helper
import { setBaseFontSize } from '../../helper';

// Styles
import styled from 'styled-components';
const Invoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.33333em;
  
  width: 100%;
  font-family: 'Montserrat';
  ${props =>
    props.baseFontSize &&
    `
    font-size: ${props.baseFontSize};
  `} .label, h4, th {
    font-weight: 500;
    font-size: 0.66667em;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 1px;
    color: #2c323a;
    margin: 0;
  }
  h4 {
    margin-bottom: 0.66667em;
  }
  p {
    font-weight: 300;
    font-size: 0.66667em;
    color: #2c323a;
    line-height: 1.75;
    margin: 0;
  }
  .w5 {
    width: 5%;
  }
  .w7 {
    width: 7%;
  }
  .w10l {
   width: 5%;
   text-align: left;
  }
   
  .w10 {
    width: 10%;
    text-align: center;
  }
  .w15 {
    width: 15%;
  }
  .w20 {
    width: 20%;
  }
  .footer {
    font-weight: bold;
    font-size: 0.7em;
    font-weight: 600;
    line-height: 1.6em;
    padding-bottom: 1em;
    }
    
  .footerbold {
    font-weight: bold;
    font-size: 1em;
    font-weight: 700;
    line-height: 2em;
    padding-bottom: 1em;
  }
`;

// Child Components
import Logo from './components/Logo';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Note from './components/Note';
import SubFooter from './components/SubFooter';

// Component
function Commerical(props) {
  return (
    <Invoice baseFontSize={setBaseFontSize(props.configs.fontSize)}>
      <Logo {...props} />
      <Header {...props} />
      <Main {...props} />
      <Note {...props} />
      <Footer {...props} />
      <SubFooter {... props} />
    </Invoice>
  );
}

Commerical.propTypes = {
  invoice: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  configs: PropTypes.object.isRequired,
};

export default Commerical;
