import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  text-align:right;
`;

export const Link = styled.button`
    width:120px;
    margin:10px 10px;
    height:40px;
    font-size:1.0em;
    display:flex;
    align-items:center;
    justify-content:center;
    background:transparent;
    color:white;
    border:0px solid white;

    :hover{
        background:white;
        color:black;
        font-weight:bold;
    }

`;