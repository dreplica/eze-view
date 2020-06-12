import React from 'react';
import Select from 'react-select';
import queryString from 'query-string'

import { Container, Val, customStyle } from './style'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const nav = [
    { value: "buy", label: 'Highest Buy' },
    { value:  "sell", label: 'Lowest Sell' },
    { value:  "", label: 'Random' }
]

export default function Navigate(props) {
    const history = useHistory()

    const sortSale = (val) => {
        const query = queryString.stringifyUrl({
            url: "",
            query: { sell: val.value,page:1 }
        })
        history.push(query)
    }

    return (
        <Container>
            <Val>
                <Select
                    styles={customStyle}
                    // defaultValue={nav[2]}
                    label="Single select"
                    placeholder={`Sort by Sale`}
                    onChange={sortSale}
                    options={nav}
                    isSearchable={false}
                    maxMenuHeight={200}
                    menuPlacement={'auto'}
                    menuPosition={'absolute'}
                />
            </Val>
        </Container>
    );
}
