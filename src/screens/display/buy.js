import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { fetchData,sorting } from '../../store/actioncreators/items';

function BuyScreen({ fetchData, filter,sorting}) {
    useEffect(() => {
        // sorting({sort:"",size:""})
        fetchData("/buy?page=1&limit=24", { sort: "", size: "" })
    }, [])

    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter
})

export default connect(mapStateToProps, { fetchData,sorting })(BuyScreen)