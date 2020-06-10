import styled from 'styled-components';

export const Container = styled.div`
  width:50%;
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:20px auto;
  text-align:center;

`;

export const Text = styled.h3`
  text-align:center;
  margin:30px auto;
  color:rgba(250,250,250,0.5);
`

export const Page = styled.h3`
  text-align:center;
  margin:20px;
  color:rgba(250,250,250,1);
  font-size:1.2em;
`

export const Navigate = styled.button`
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:transparent;
    /* border:2px solid white; */
    color: white;
    font-size:1.3em;
    font-weight:bolder;
    border-radius:30px;
    transition:transform 0.5s;
    outline-width:0px;

    :hover{
      transform:scale(1.1);
      background:white;
      color:black
    }
`;
