import React from 'react';
import { Link } from 'react-router-dom';

import categoryJson from '../../lib/category.json';
import { Container, PhoneType, Phones,Context,Selection,Price, Item } from './style';

export default function Category() {

    const highlight = (e) => {
        e.preventDefault();
        
    }

    return (
        <Container>
            <PhoneType>
                <Context>Type</Context>
                <Phones>
                    {categoryJson.Category.map((cat, ind) => <Link key={ind} to={`/${cat}`}>{cat}</Link>)}
                </Phones>
            </PhoneType>

            <Context>Condition</Context>
            <Selection>
                {categoryJson.Condition.map((cond,ind)=><option key={ind} value={`${cond}`}>{cond}</option>)}
            </Selection>

            <Price>
                <Context>Filter</Context>
                <Item>Min</Item>
                <Item>Max</Item>
            </Price>

            <Context>Storage</Context>
            <Selection>
                {categoryJson.Storage.map((cond,ind)=><option key={ind} value={`${cond}`}>{cond}</option>)}
            </Selection>
        </Container>
    );
}
