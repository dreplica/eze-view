import React, { useEffect,memo } from 'react';
import { connect } from 'react-redux';

import Sales from '../../components/sales';
import {fetchData} from '../../store/actions/items';

function HomeScreen({fetchData,filter,products}) {
  useEffect(() => {
      //i will have to check with the url here incase an old link is passed, to persist
      fetchData({...filter})
  }, [])
  
  const MemoizeSale = memo(Sales)

  return (<MemoizeSale products={products}/>);
}

const mapStateToProps = ({ ItemsReducer}) => ({
  filter:ItemsReducer.filter,
  products:ItemsReducer.currentData
})

export default connect(mapStateToProps, {fetchData})(HomeScreen)