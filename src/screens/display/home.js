import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function HomeScreen({fetchData}) {
    useEffect(() => {
      //here it would send the first request for home
        //originially i am supose to fetch the sort and size from redux
        fetchData("?page=1&limit=12")
    }, [])

    return (<Sales />);
}

export default connect(null, {fetchData})(HomeScreen)