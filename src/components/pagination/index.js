import React, { useState } from 'react';

import { Container, Navigate } from './style';
export default function Pagination() {
  const [state] = useState(['Previous', 'Next']);
  //here it updates, if theres a next,
  //it would update the previous button with the url
  //same for the next button
  return <Container>
    {state.map((nav, ind) => <Navigate key={ind}>{nav}</Navigate>)}
  </Container>;
}
