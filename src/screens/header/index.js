import React from 'react';

import Intro from './intro'
import {Container,Image} from './style'
export default function Header() {
  return (
      <Container>
          <Intro />
          <Image src='/assets/four.png' alt='background'/>
    </Container>
  );
}
