import React from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateSpreadsheet } from '../../store/actions/items';
import { Container, Link, } from './style'

function LoadPhones({ update }) {
    
    const refreshPage = () => {
        update()
    }

    return (
        <Container>
            <Link onClick={refreshPage}>Load Phones</Link>
        </Container>
    );
}

export default connect(null, { update:updateSpreadsheet })(LoadPhones)
