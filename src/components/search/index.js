import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

import { Container,Input,Button} from "./style";

export default function Search() {
  return (
      <Container>
          <Input type='search' />
          <Button>Search <FaArrowRight /></Button>
    </Container>
  );
}
