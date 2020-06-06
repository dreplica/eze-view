import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function SearchScreen({ fetchData }) {

     //get current filter details to send as params
    //no need to pass params to sale, it would just fetch current data from reducer
    //sale useeffect applies as data changes

    useEffect(() => {
        //here it would send the first request for home
        fetchData("?page=1&limit=12")
    }, [])

    return (<Sales />);
}

export default connect(null, { fetchData })(SearchScreen)