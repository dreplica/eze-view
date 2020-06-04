import React from 'react';

import {Container,Image} from './style'

export default function Spinner() {
  return (
      <Container>
          <Image src='/assets/spinner.gif' alt='activityIndicator'/>
    </Container>
  );
}
