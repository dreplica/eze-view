import React from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateSpreadsheet } from '../../../store/actioncreators/items';
import { Container, Link, } from './style'
import { FaHome } from 'react-icons/fa';

function LoadPhones({ update }) {
    const history = useHistory()

    const refreshPage = () => {
        update()
        history.push('/')
    }

    return (
        <Container>
            <Link onClick={refreshPage}> <FaHome /> <span> Load Phones</span></Link>
        </Container>
    );
}

export default connect(null, { update: updateSpreadsheet })(LoadPhones)
