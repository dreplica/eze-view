import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:flex-start;
  align-content:center;
  height:400px;
  background:url('/assets/four.png')right/contain  no-repeat;

  @media (max-width:850px){
    background:linear-gradient(to bottom, rgba(34,0,0,0.6),rgba(0,0,0,0.1)),  url('/assets/four.png')right/contain  no-repeat;
    justify-content:center;
  }
`;

export const Content = styled.div`
  width:40%;
  padding-left:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  @media (max-width:850px){
    width:100%;
  }
`;

export const Text = styled.p`
  padding-right:25px;
  font-size:2.5em;
  font-weight:bold;
  color:white;
  @media (max-width:850px){
    text-align:center;
  }
`;

export const Image = styled.img`
  width:30%;
`;
