import React from 'react';

import { Container,Input,Button} from "./style";

export default function Search() {
  return (
      <Container>
          <Input type='search' placeholder=" Enter Search Term Eg:iphone Xs, A1, 128GB" />
      <Button type='button'>SEARCH <span style={{ fontSize: 25 }}>&rarr;</span></Button>
    </Container>
  );
}
