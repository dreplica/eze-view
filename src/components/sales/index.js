import React, { useEffect } from 'react';

import Phone from '../phone';
import {Container} from './style'
import { connect } from 'react-redux';
 function Sale({products}) {
    useEffect(() => {
        console.log("prod",products)
    }, [products])
     
     const Sales = ()=>products.map((phone, ind) => <Phone
         key={ind}
         name={phone.phone}
         image={phone.phone.replace(/\s/g, "_").toLocaleLowerCase()}
         price={phone.price}
         condition={phone.condition ? "Locked" : "Unlocked"}
         size={phone.size}
         sale={phone.sell.replace(/\w$/, "").toLocaleUpperCase()}
         memory={phone.memory}
     />)
     
    return (
        <Container>{Sales()} </Container>
  );
}

const mapStateToProps = ({ItemsReducer}) => ({
    products:ItemsReducer.currentData
})

export default connect(mapStateToProps,null)(Sale)