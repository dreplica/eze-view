import React from 'react';
import { connect } from 'react-redux';
import {FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { fetchData } from '../../store/actions/items';
import { Container, Navigate,Page } from './style';

function Pagination({ fetch, paging, filter }) {

  const getRequest = (e) => {
    const id = e.currentTarget.id

    id === 'prev'
      ? fetch({ ...filter, page: paging.previous.page })
      : fetch({ ...filter, page: paging.forward.page })
  }

  // const outOfPage = <Text>...Oops Sorry You're out of Content...</Text>

  // if (!paging.forward.page) return outOfPage

  return <Container>

    <Navigate
      onClick={getRequest}
      id='prev'
      disabled={!paging.previous.page}> <FaArrowLeft /></Navigate>

    <Page>{filter.page}</Page>

    <Navigate
      onClick={getRequest}
      id='forw'
      disabled={!paging.forward.page}><FaArrowRight /></Navigate>
  </Container>;
}

const mapStateToProps = ({ ItemsReducer, EffectReducer }) => ({
  loading: EffectReducer.pageload,
  paging: ItemsReducer.pagination,
  filter: ItemsReducer.filter,
})

export default connect(mapStateToProps, { fetch: fetchData })(Pagination)
