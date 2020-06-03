import React from 'react';

import { Container,Input} from "./style";

export default function Search() {
  return (
      <Container>
          <Input type='search' />
          <Button>Search <FaArrow /></Button>
    </Container>
  );
}
