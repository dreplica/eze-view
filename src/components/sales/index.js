import React from 'react';

import Phone from '../phone';
import {Container} from './style'
import { connect } from 'react-redux';
 function Sale({products}) {

    console.log("some products",products)
    return (
        <Container>
            {
                products.map((phone,ind) => <Phone
                    key={ind}
                    name={phone.phone}
                    price={phone.price}
                    condition={phone.condition}
                    size={phone.size}
                    sale={phone.sell}
                    memory={phone.memory}
                />)
            }
      </Container>
  );
}

const mapStateToProps = ({ItemsReducer}) => ({
    products:ItemsReducer.currentData
})

export default connect(mapStateToProps,null)(Sale)