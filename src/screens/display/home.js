import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function HomeScreen({fetchData,filter}) {
    useEffect(() => {
      
      fetchData("?page=1&limit=12", { sort: "", size: "" })
    }, [])

    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer}) => ({
  filter:ItemsReducer.filter
})

export default connect(mapStateToProps, {fetchData})(HomeScreen)