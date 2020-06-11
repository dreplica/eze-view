import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'

import Sales from '../../components/sales';
import { fetchData } from '../../store/actions/items';

function HomeScreen({ fetchData, filter, products, location }) {

  const path = location.search

  useEffect(() => {

    if (!path.length) {
      fetchData({ ...filter })
      return
    }
    const query = queryString.parse(path)
    fetchData({ ...query })

  }, [path])

  return (<Sales products={products} />);
}

const mapStateToProps = ({ ItemsReducer }) => ({
  filter: ItemsReducer.filter,
  products: ItemsReducer.currentData
})

export default connect(mapStateToProps, { fetchData })(HomeScreen)