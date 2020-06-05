import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchData,load } from '../../store/actioncreators/items';
import { Container, Link, } from './style'
import Axios from 'axios';

function LoadPhones(props) {

    const fetchingProcess = () => {
        //this loadphones has to come through effect
        //this function is not suppose to happen here
        props.load()
        // Axios.get('http://localhost:3000/update').then(_ => {
        //     props.fetchData('buy', { sort: "", size: "" })
        // })
    }

    return (
        <Container>
            <Link onClick={fetchingProcess}>Load Phones</Link>
        </Container>
    );
}

const mapStateToProps = ({ ItemsReducer }) => {
    return {
        loadPhones: ItemsReducer.loading
    }
}





export default connect(mapStateToProps, { fetchData, load })(LoadPhones)
