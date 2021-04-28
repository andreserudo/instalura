import React from 'react';
import Logo from '../../../theme/Logo';
import { HomeIcon, PostIcon, HeartIcon } from '../../../theme/Icons';

import HeaderWrapper from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Left>
        <Logo />
      </HeaderWrapper.Left>
      <HeaderWrapper.Right>
        <li>
          <button type="button">
            <HomeIcon />
          </button>
        </li>
        <li>
          <button type="button">
            <PostIcon />
          </button>
        </li>
        <li>
          <button type="button">
            <HeartIcon />
          </button>
        </li>
      </HeaderWrapper.Right>
    </HeaderWrapper>
  );
}

export default Header;
