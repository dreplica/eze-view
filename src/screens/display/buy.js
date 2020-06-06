import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function BuyScreen({ fetchData }) {
    useEffect(() => {
        //here it would send the first request for home
        fetchData("?page=1&limit=12")
    }, [])

    return (<Sales />);
}

export default connect(null, { fetchData })(BuyScreen)