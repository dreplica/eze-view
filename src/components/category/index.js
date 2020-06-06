import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import categoryJson from '../../lib/category.json';
import { connect } from 'react-redux';
import { sorting, fetchData } from '../../store/actioncreators/items';
import { Container, Filter, Phones, Context, Price, Item } from './style';

function Category({ setSort, filter, fetch, url }) {

    const [state] = useState([
        { sort: "Min", num: 1 },
        { sort: "Max", num: -1 }
    ])


    const filterSort = (e) => {
        e.preventDefault();
        const sortVal = e.currentTarget.dataset.sort ?? filter.sort
        const sizeVal = e.currentTarget.dataset.size ?? filter.size

        setSort({ ...filter, sort: sortVal, size: sizeVal })

        console.log("happpekjkomvv", url)
        fetch(url, { sort: sortVal, size: sizeVal })

    }

    const style = (item) => {
        const sortVal = parseInt(filter.sort)
        return ({
        backgroundColor: sortVal === item ? "white" : "rgb(4, 12, 27)",
        color: sortVal === item ? "black" : 'white',
        fontSize: sortVal === item ? '1.2em' : "1em",
        fontWeight: sortVal === item ? 'bold' : "",
    })}

    return (
        <Container>
            <Filter>Filter</Filter>
            <Context>Price :</Context>
            <Price>
                {state.map((sort,ind) => <Item style={style(sort.num)}
                    data-sort={sort.num}
                    key={ind}
                    onClick={filterSort}>{sort.sort}</Item>)}
            </Price>

            <Context>Storage :</Context>
            <Phones>
                {categoryJson.Storage.map((cat, ind) => <Link
                    key={ind}
                    to={`/${cat}`}
                    data-size={cat}
                    onClick={filterSort}
                    style={{
                        color: filter.size === cat && "red"
                    }}
                > + {cat}GB</Link>)}
            </Phones>
        </Container>
    );
}

const mapStateToProps = ({ ItemsReducer, EffectReducer }) => ({
    filter: ItemsReducer.filter,
    url: ItemsReducer.currentUrl,
})


export default connect(mapStateToProps, { setSort: sorting, fetch: fetchData })(Category)
