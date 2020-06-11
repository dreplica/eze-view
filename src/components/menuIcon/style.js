import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    position:sticky;
    background-color: rgb(4, 12, 27);
    top:0px;
    padding-top:10px;
    z-index:2;
    width:100%;
    height:60px;
    align-items:center;
    justify-content:space-between;
`;

export const Filter = styled.img`
  transition:transform 0.5s;

  :hover{
    transform:scale(1.2);
    cursor:pointer;
  }
`