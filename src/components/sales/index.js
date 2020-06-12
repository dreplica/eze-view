import React, {  useEffect } from 'react';

import Phone from '../phone';
import {Container,Warning} from './style'

export default function Sale({ products }) {
    
    useEffect(() => {
        
    },[products])

    if (!products.length) {
        return <Warning>....oOPs Sorry, We don't have that phone ...</Warning>
    }
     const Sales = ()=>products.map((phone, ind) => <Phone
         key={ind}
         name={phone.phone}
         locked={phone.locked !== 'false' ? "Locked" : "Unlocked"}
         image={phone.phone.replace(/\s/g, "_").toLocaleLowerCase()}
         price={phone.price}
         condition={phone.condition}
         size={phone.size}
         sale={phone.sell.toLocaleUpperCase()}
         memory={phone.memory}
     />)
     
    return (
        <Container>{Sales()} </Container>
  );
}
