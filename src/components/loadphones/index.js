import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchData } from '../../store/actioncreators/items';
import { Container, Link, } from './style'
import Spinner from '../spinner';
import Axios from 'axios';

function LoadPhones({loadPhones,fetch}) {
    useEffect(() => {
    //   fetch()
        // console.log("the fetch",fetch)
    }, [loadPhones])
    console.log(loadPhones)

    const fetchingProcess = () => {
        //this loadphones has to come through effect
        //this function is not suppose to happen here
        // Axios.get('http://localhost:3000/update').then(_ => {   
            fetch('buy')
        // })
    }

    return (
        <Container>
            {loadPhones && <Spinner />}
            <Link onClick={fetchingProcess}>Load Phones</Link>
        </Container>
    );
}

const mapStateToProps = ({ItemsReducer}) => {
    return {
        loadPhones:ItemsReducer.loading
    }
}

export default connect(mapStateToProps, { fetch: fetchData })(LoadPhones)
