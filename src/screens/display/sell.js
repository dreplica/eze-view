import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData } from '../../store/actioncreators/items';

function SellScreen({ fetchData,filter }) {
    useEffect(() => {
        fetchData("/sell?page=1&limit=24", { sort: filter.sort, size: "" })
    }, [])

    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter
})

export default connect(mapStateToProps, { fetchData })(SellScreen)