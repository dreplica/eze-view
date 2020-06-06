import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function BuyScreen({ fetchData }) {
    
    useEffect(() => {
        //here it would send the first request for home
        fetchData("buy?page=1&limit=24")
    }, [])

    return (<Sales />);
}

export default connect(null, { fetchData })(BuyScreen)