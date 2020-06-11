import React  from 'react';
import { connect } from 'react-redux';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import queryString from 'query-string'

import { Container, Navigate, Page } from './style';

function Pagination({ paging, filter }) {

  const { push } = useHistory()

  const getRequest = (e) => {
    const page = e.currentTarget.id
    const query = queryString.stringifyUrl({ url: '', query: { ...filter, page } })
    push(query)

    // id === 'prev'
    //   ? fetch({ ...filter, page: paging.previous.page })
    //   : fetch({ ...filter, page: paging.forward.page })
  }

  return (
    <Container>
      <Navigate
        onClick={getRequest}
        id={paging.previous.page}
        disabled={!paging.previous.page}> <FaArrowLeft /></Navigate>

      <Page>{filter.page}</Page>

      <Navigate
        onClick={getRequest}
        id={paging.forward.page}
        disabled={!paging.forward.page}><FaArrowRight /></Navigate>
    </Container>
  );
}

const mapStateToProps = ({ ItemsReducer }) => ({
  paging: ItemsReducer.pagination,
  filter: ItemsReducer.filter,
})

export default connect(mapStateToProps,null)(Pagination)
