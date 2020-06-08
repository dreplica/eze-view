import React from 'react';

import LittleSpinner from '../spinner/littleSpinner';
import { connect } from 'react-redux';
import { paginate,searchPhone} from '../../store/actioncreators/items';
import { Container, Navigate, Text } from './style';

function Pagination(props) {

  //here it updates, if theres a next,
  //it would update the previous button with the url
  //same for the next button

  const getRequest = () => {
    const path = window.location.pathname
    if (/search/i.test(path)) {
      props.search(`search?page=${props.forward.page}&limit=${props.forward.limit}`,
        { search:props.searchVal, sort:props.filter.sort,size:"" },true
      )
      return
    }
    props.fetch(`${path}?page=${props.forward.page}&limit=${props.forward.limit}`, props.filter)
  }

  const outOfPage = <Text>...Oops Sorry You're out of Content...</Text>

  if (!props.forward.page) return outOfPage

  return <Container>
    {props.loading
      ? <LittleSpinner path='/assets/801.png' width="10" />
      : <Navigate onClick={getRequest}>See More</Navigate>
    }

  </Container>;
}

const mapStateToProps = ({ ItemsReducer, EffectReducer }) => ({
  loading: EffectReducer.pageload,
  forward: ItemsReducer.pagination.forward,
  url: ItemsReducer.currentUrl,
  searchVal:ItemsReducer.search,
  filter: ItemsReducer.filter,
})

export default connect(mapStateToProps, { search:searchPhone, fetch: paginate })(Pagination)
