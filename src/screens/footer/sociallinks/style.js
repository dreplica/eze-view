import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex:1;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;

    a{
        width:30px;
        height:30px;
        color:none;
        text-decoration:none;

        img{
            width:100%;
        }
    }

     @media (max-width:960px) {
        width:60%;
    }
`;
