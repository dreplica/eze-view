import React from 'react';
import Select from 'react-select';
import queryString from 'query-string'

import { Context } from '../category/style';
import { Container, Val, customStyle } from './style'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const nav = [
    { value: { option: "buy", sort: "-1" }, label: 'Highest Buy' },
    { value: { option: "sell", sort: "1" }, label: 'Lowest Sell' },
    { value: { option: "", sort: "" }, label: 'Random' }
]

function Navigate(props) {
    const history = useHistory()

    const sortSale = (val) => {
        console.log(val)
        const query = queryString.stringifyUrl({
            url: "",
            query: { ...props.filter, sell: val.option, sort: val.sort }
        })
        history.push(query)
    }

    return (
        <Container>
            {/* <Context style={{ width: 'auto', marginRight: 10 }}>Select Sale Type : </Context> */}
            <Val>
                <Select
                    styles={customStyle}
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

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter
})

export default connect(mapStateToProps, null)(Navigate)