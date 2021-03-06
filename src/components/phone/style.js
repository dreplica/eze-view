import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  width:300px;
  margin:20px auto;
  padding:10px;
  height:auto;
  display:flex;
  flex-direction:column;
  color:white;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  background-color: rgba(10,24,46,1);
`;


export const Price = styled.p`
    position:absolute;
    top:0px;
    left:0px;
    font-weight:bold;
    /* background-color:rgba(0,0,0,0.4); */
    width:auto;
    color:whitesmoke;
    padding:0px 10px 4px 3px;
`;

export const Text = styled.p`
    margin-bottom:5px;
`;


export const Image = styled.img`
    width:60%;
`;

export const Details = styled.div``;

export const Button = styled.button`
  width:100px;
  height:40px;
  border-width:0px;
  border-radius:10px;
  color:white;
  font-weight:bold;
  font-size:1em;
  background:#0000d8;

  :hover{
      cursor:pointer;
      border:2px solid white;
  }
`;
