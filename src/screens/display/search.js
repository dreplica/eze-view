import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { searchPhone } from '../../store/actioncreators/items';
import { useParams } from 'react-router-dom';

function SearchScreen({ searchfunc, products,filter }) {
    const {search} = useParams()
  useEffect(() => {
      console.log("entering")
      searchfunc(`search?page=1&limit=12`, { search: search, sort:filter.sort,size:"" })
    }, [search])
    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter,
    product:ItemsReducer.currentData
})

export default connect(mapStateToProps, { searchfunc:searchPhone })(SearchScreen)