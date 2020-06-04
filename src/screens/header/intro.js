import React from 'react';
import Search from '../../components/search'

import {Content, Text } from './style'

export default function Intro() {
  return (
      <Content>
          <Text>
            SHOP OUR LATEST AVAILABLE STOCKS
          </Text>
          <Search />
    </Content>
  );
}