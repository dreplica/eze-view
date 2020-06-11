import React from 'react';

import { Container, Title, Content } from './style'

export default function List(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Content>
        {props.list.map((item, ind) => <li key={ind}><a href='/'>{item}</a></li>)}
      </Content>
    </Container>
  );
}
