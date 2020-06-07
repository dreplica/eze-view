import styled from 'styled-components';

export const Foot = styled.section`
      background-color: rgba(10, 20, 37,0.3);
      border-top:1px solid whitesmoke;
      margin-top:20px;
    padding:40px 0px;

`

export const Container = styled.section`
  width:80%;
  margin:auto;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:flex-start;
  
   @media (max-width:960px) {
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    }
`;

export const Logo = styled.div`
    flex:1;
    color:white;
    font-size:2em;
    font-weight:bolder;
    color:grey;
    
`

export const Listing = styled.div`
    display:flex;
    height:auto;
    color:white;
    align-items:flex-start;
    justify-content:center;
    flex:3;

     @media (max-width:960px) {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`