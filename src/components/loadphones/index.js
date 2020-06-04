import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchData } from '../../store/actioncreators/items';
import { Container, Link, } from './style'
import Spinner from '../spinner';

function LoadPhones({loadPhones,fetch}) {
    // useEffect(() => {
      
    // }, [loadPhones])
    // console.log(loadPhones)

    const fetchingProcess = () => {
        //this loadphones has to come through effect
        //this function is not suppose to happen here
        if (loadPhones === true) {
            
        }
    }

    return (
        <Container>
            {loadPhones && <Spinner />}
            <Link onClick={fetch()}>Load Phones</Link>
        </Container>
    );
}

const mapStateToProps = ({ItemsReducer}) => {
    return {
        loadPhones:ItemsReducer.loading
    }
}

export default connect(mapStateToProps, { fetch: fetchData })(LoadPhones)
