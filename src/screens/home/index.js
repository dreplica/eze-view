import React from 'react';

import Phone from '../../components/phone';
import {Container} from './style'
export default function Home() {

    const items = Array.from({length:20},(x)=>x="op")

    return (
        <Container>
            {
                items.map((phone, ind) => <Phone key={ind}/>)
            }
      </Container>
  );
}
