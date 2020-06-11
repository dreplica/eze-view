import React from 'react';
import List from './components/list';
import Data from '../../lib/json/service.json'
import { Container, Logo, Foot, Listing } from './style'
import SocialLinks from './components/sociallinks';

export default function Footer() {
    return (
        <Foot>
            <Container>
                <Logo>Eze's Wholesale </Logo>
                <Listing>
                    {
                        Data.map((items, index) => <List
                            key={index}
                            list={items.list}
                            title={items.title}
                        />)
                    }
                </Listing>
                <SocialLinks />
            </Container>
        </Foot>
    );
}
