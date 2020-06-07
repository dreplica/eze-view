import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:32%;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;

     @media (max-width:960px) {
        width:70%;
        margin:20px auto;
        justify-content:center;
        align-items:center;
    }
`;

export const Content = styled.ul`
    text-align:left;

    li{
        list-style:none;
        color:black;
        font-weight:300;

        a{
            text-decoration:none;
            color:white;
        }
    }
     @media (max-width:960px) {
        text-align:center;
    }
`

export const Title = styled.p`
    font-size:1.5rem;
    font-weight:bold;
`
