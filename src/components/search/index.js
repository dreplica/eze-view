import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { searchPhone } from '../../store/actioncreators/items';
import { Container, Input, Button } from "./style";

function Search({filter,searchfunc}) {
  const history = useHistory()
  const [state, setstate] = useState("")

  const makeSearch = (e) => {
    e.preventDefault()

    if (/\w/g.test(state)) {

      history.push(`/search/${state}`)
    };

  }

  return (
    <Container>

      <Input
        type='search'
        onChange={(e) => setstate(e.currentTarget.value)}
        placeholder=" Enter Search Term Eg:iphone Xs, A1, 128GB"
      />
      <Button type='button' onClick={makeSearch}>SEARCH <span style={{ fontSize: 25 }}>&rarr; </span></Button>
    </Container>
  );
}

const mapStateToProps = ({ ItemsReducer }) => ({
  filter: ItemsReducer.filter
})

export default connect(mapStateToProps, { searchfunc: searchPhone })(Search)