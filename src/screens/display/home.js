import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function HomeScreen({fetchData,filter}) {
    useEffect(() => {
      //here it would send the first request for home
        //originially i am supose to fetch the sort and size from redux
        fetchData("?page=1&limit=12",filter)
    }, [])

    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer}) => ({
  filter:ItemsReducer.filter
})

export default connect(mapStateToProps, {fetchData})(HomeScreen)