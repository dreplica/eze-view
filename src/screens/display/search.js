import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import { searchPhone,sorting } from '../../store/actioncreators/items';
import { useParams } from 'react-router-dom';

function SearchScreen({ searchfunc, products,filter ,sorting}) {
    const {search} = useParams()
  useEffect(() => {
      searchfunc(`search?page=1&limit=12`, { search: search, sort: "", size: "" })
    //   sorting({ sort: "", size: "" })
    }, [search])
    return (<Sales />);
}

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter,
    product:ItemsReducer.currentData
})

export default connect(mapStateToProps, { searchfunc:searchPhone,sorting })(SearchScreen)