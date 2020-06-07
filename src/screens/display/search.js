import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { searchPhone } from '../../store/actioncreators/items';

function SearchScreen({ searchfunc, products }) {

    useEffect(() => {
      console.log("hafa")
    }, [])
    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter,
    product:ItemsReducer.currentData
})

export default connect(mapStateToProps, { searchfunc:searchPhone })(SearchScreen)