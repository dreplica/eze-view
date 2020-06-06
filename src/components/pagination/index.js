import React, { useState } from 'react';

import LittleSpinner from '../spinner/littleSpinner';
import { Container, Navigate,Text } from './style';
export default function Pagination() {
  const [state] = useState('See More');
  const [loading,setLoad] = useState(false);
  const [forward,setFow] = useState({page:"k"});
  //here it updates, if theres a next,
  //it would update the previous button with the url
  //same for the next button

  const getRequest = () => {
    
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
      setFow({})
    },2000)
  }

  const outOfPage = <Text>...Oops Sorry You're out of Content...</Text>

  if(!forward.page) return outOfPage

  return <Container>
    {loading
      ? <LittleSpinner path='/assets/801.png' width="10"/>
      : <Navigate onClick={getRequest}>{state}</Navigate>
    }
    
  </Container>;
}
