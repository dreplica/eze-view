import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import categoryJson from '../../lib/category.json';
import { Container, Filter, Phones, Context, Price, Item } from './style';
import { connect } from 'react-redux';
import { sorting, fetchData } from '../../store/actioncreators/items';

function Category({ setSort, filter, fetch, url }) {

    // const [sort,setsortVal] = useState(filter.sort)
    const [state] = useState([
        { sort: "Min", num: 1 },
        { sort: "Max", num: -1 }
    ])


    const filterSort = (e) => {
        e.preventDefault();
        const val = e.currentTarget.dataset.val
        setSort({ ...filter, sort: parseInt(val) })
        console.log("happpekjkomvv",url)
        fetch(url, { sort: val, size: filter.size })
        // setsortVal(val)
        // alert(sort)

    }
    const style = (item) => ({
        backgroundColor: filter.sort === item ? "white" : "rgb(4, 12, 27)",
        color: filter.sort === item ? "black" : 'white',
        fontSize: filter.sort === item ? '1.2em' : "1em",
        fontWeight: filter.sort === item ? 'bold' : "",
    })

    return (
        <Container>
            <Filter>Filter</Filter>
            <Context>Price :</Context>
            <Price>
                {state.map((sort) => <Item style={style(sort.num)}
                    data-val={sort.num}
                    onClick={filterSort}>{sort.sort}</Item>)}
            </Price>

            <Context>Storage :</Context>
            <Phones>
                {categoryJson.Storage.map((cat, ind) => <Link
                    key={ind}
                    to={`/${cat}`}
                    style={{ textDecoration: filter.size === cat && "underline" }}
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
