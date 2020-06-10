import React from 'react';
import Select from 'react-select';

import Dropdown from '../category/dropdown';
import { customStyle } from '../category/dropdown/style';
import { Context } from '../category/style';
import { Container } from './style'


export default function Navigate() {

    const nav = ['Highest Buy', 'Lowest Sell', 'Random']
    return (
        <Container>
            <Context style={{ width: 'auto', marginRight: 10 }}>Select Sale Type : </Context>
            <Select options={[...nav]}
                styles={customStyle}
                label="Single select"
                placeholder={`Pick a Sale`}
                isSearchable={false}/>
        </Container>
    );
}
