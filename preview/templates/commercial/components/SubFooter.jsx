// React Libraries
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const InvoiceFooter = styled.div `
  margin-top: 15px;
  align-self: end;
  width: 100%;
`;



// Component
function Footer({t, invoice, profile, configs}) {
  const {tax, language, accentColor, customAccentColor} = invoice;
  return (
    <InvoiceFooter>
      <p>{profile.subText}</p>
    </InvoiceFooter>)
}

Footer.propTypes = {
  configs: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired
};

export default Footer;
