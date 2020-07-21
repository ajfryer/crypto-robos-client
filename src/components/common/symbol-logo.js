import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BNBIcon } from 'cryptocurrency-icons/svg/white/bnb.svg';
import { ReactComponent as BTCIcon } from 'cryptocurrency-icons/svg/white/btc.svg';
import { ReactComponent as ETHIcon } from 'cryptocurrency-icons/svg/white/eth.svg';
import { ReactComponent as LINKIcon } from 'cryptocurrency-icons/svg/white/link.svg';
import { ReactComponent as LTCIcon } from 'cryptocurrency-icons/svg/white/ltc.svg';
import { ReactComponent as MKRIcon } from 'cryptocurrency-icons/svg/white/mkr.svg';
import { ReactComponent as REPIcon } from 'cryptocurrency-icons/svg/white/rep.svg';
import { ReactComponent as XMRIcon } from 'cryptocurrency-icons/svg/white/xmr.svg';
import { ReactComponent as XRPIcon } from 'cryptocurrency-icons/svg/white/xrp.svg';
import { ReactComponent as XTZIcon } from 'cryptocurrency-icons/svg/white/xtz.svg';

const SymbolLogo = (props) => {
  return (
    <Wrapper>
      {(() => {
        const symbol = props.symbol.toUpperCase();
        switch (symbol) {
          case 'BNB':
            return <BNBIcon />;
          case 'BTC':
            return <BTCIcon />;
          case 'ETH':
            return <ETHIcon />;
          case 'LINK':
            return <LINKIcon />;
          case 'LTC':
            return <LTCIcon />;
          case 'MKR':
            return <MKRIcon />;
          case 'REP':
            return <REPIcon />;
          case 'XMR':
            return <XMRIcon />;
          case 'XRP':
            return <XRPIcon />;
          case 'XTZ':
            return <XTZIcon />;
          default:
            return null;
        }
      })()}
    </Wrapper>
  );
};

// custom styled components
const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export default SymbolLogo;
