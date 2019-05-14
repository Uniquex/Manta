// React Libraries
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const InvoiceFooter = styled.div `
  margin-top: 15px;
  grid-column: 3;
  grid-row: auto;
  align-self: end;
  width: 100%;
`;

const InvoiceCompany = styled.div `
  display: grid;
  grid-template-columns: auto auto auto;
  h1 {
    margin-bottom: -1em;
  }
`;

const ColumnLeft = styled.div `
  grid-column: 1;
  font-size: 0.9em;
  align-self: start;
`;

const ColumnMiddle = styled.div `
  grid-column: 2;
  text-align: center;
  font-size: 0.9em;
`;

const ColumnRight = styled.div `
  grid-column: 3;
  font-size: 0.9em;
  text-align: end;
`;

// Component
function Footer({t, invoice, profile, configs}) {
  const {tax, language, accentColor, customAccentColor} = invoice;
  return (
    <InvoiceFooter>
      <InvoiceCompany>
        <ColumnLeft>
          <p>{profile.company}</p>
          <p>{profile.street}</p>
          <p>{profile.postcode} - {profile.town}</p>
          <p>{profile.country}</p>
        </ColumnLeft>
        <ColumnMiddle>
          <p>{profile.phone}</p>
          <p>{profile.email}</p>
          <p>{profile.website}</p>
        </ColumnMiddle>
        <ColumnRight>
          <p>{profile.bank}</p>
          <p>{profile.iban}</p>
          <p>{profile.bic}</p>
        </ColumnRight>
      </InvoiceCompany>
    </InvoiceFooter>)
}

Footer.propTypes = {
  configs: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired
};

export default Footer;
