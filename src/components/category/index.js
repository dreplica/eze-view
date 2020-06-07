import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import categoryJson from '../../lib/category.json';
import { connect } from 'react-redux';
import { sorting, fetchData, } from '../../store/actioncreators/items';
import {displayFilter } from '../../store/actioncreators/effects';
import { Container, Filter, Phones, Context, Price, Item } from './style';

function Category(props) {

    const [watcher,setWatch] = useState(false)
    const [state] = useState([
        { sort: "Min", num: 1 },
        { sort: "Max", num: -1 }
    ])

    useEffect(() => {
        if (window.innerWidth < 850) {
            setWatch(true)
        }
        window.addEventListener('resize', toggleFilter, false)
        return () => {
            window.removeEventListener('resize', toggleFilter, false)
        }
    }, [window.innerWidth])

    const toggleFilter = () => {
        if (window.innerWidth > 850) {
            // props.filterEffect('close')
            setWatch(false)
            return;
        }
        setWatch(true)
        // props.filterEffect('open')
    }

    const filterSort = (e) => {
        e.preventDefault();
        const sortVal = e.currentTarget.dataset.sort ?? props.filter.sort
        const sizeVal = e.currentTarget.dataset.size ?? props.filter.size

        props.setSort({ ...props.filter, sort: sortVal, size: sizeVal })

        props.fetch(props.url, { sort: sortVal, size: sizeVal })

        props.displayer && props.filterEffect('close')
    }

    const style = (item) => {
        const sortVal = parseInt(props.filter.sort)
        return ({
        backgroundColor: sortVal === item ? "white" : "rgb(4, 12, 27)",
        color: sortVal === item ? "black" : 'white',
        fontSize: sortVal === item ? '1.2em' : "1em",
        fontWeight: sortVal === item ? 'bold' : "",
        })
    }
    
    const closeCat = (e)=>{
        e.preventDefault()
        props.filterEffect('close')
    }

    return (
        <Container style={{
            display: watcher ?props.displayer:"flex"
        }}>
            <Filter><span>Filter</span> {watcher && <a href='/' onClick={closeCat} >cancel</a>}</Filter>
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
                        color: props.filter.size === cat && "red"
                    }}
                > + {cat}GB</Link>)}
            </Phones>
        </Container>
    );
}

const mapStateToProps = ({ ItemsReducer, EffectReducer }) => ({
    filter: ItemsReducer.filter,
    url: ItemsReducer.currentUrl,
    displayer:EffectReducer.categoryMenu
})


export default connect(mapStateToProps, {
    setSort: sorting,
    fetch: fetchData,
    filterEffect: displayFilter
})(Category)
