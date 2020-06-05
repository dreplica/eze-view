import React from 'react';

import Phone from '../../components/phone';
import {Container} from './style'
export default function Sale() {

    const items = Array.from({length:20},(x,i)=>({phone:"iphone 6s",price:200,condition:"New",size:900,sale:i%2==0?"sell":"buy",memory:""}))
    console.log(items)
    return (
        <Container>
            {
                items.map((phone) => <Phone
                    name={phone.phone}
                    price={phone.price}
                    condition={phone.condition}
                    size={phone.size}
                    sale={phone.sale}
                    memory={phone.memory}
                />)
            }
      </Container>
  );
}
