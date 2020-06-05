import React from 'react';

import {Container,Image} from './style'

export default function Spinner({image}) {
  return (
      <Container>
      <Image src={image} alt='activityIndicator'/>
    </Container>
  );
}
