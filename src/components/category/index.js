import React, { useState, useEffect } from 'react';
import queryString from "query-string"
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { displayFilter } from '../../store/actions/effects';
import { updateFilter } from '../../store/actioncreators/items';
import Dropdown from './dropdown';
import CategoryData from "../../lib/json/category.json";
import {
    Container,Line,
    Filter, Context,
    DropMenu, Actions,
    Button, Sort
} from './style';

//since the value wont change is better outside to stop new instance on render
const keys = Object.keys(CategoryData)

function Category(props) {
    const history = useHistory()
    const [watcher, setWatch] = useState(false)
    const [priceSort, setSort] = useState({ min: "", max: "" })

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
            return setWatch(false);
        }
        setWatch(true)
    }

    const processFilter = () => {
        const query = queryString.stringifyUrl({
            url: "",
            query: { ...props.filter, page: 1, [priceSort.min]: 0, [priceSort.max]: 0 }
        });
        (window.innerWidth < 850) && props.filterEffect('close');
        history.push(query)
    }


    const closeCat = (e) => {
        e.preventDefault()
        props.filterEffect('close')
    }

    const filterMenu = keys.map((item, ind) => {
        const description = item === 'size' ? "Storage" : item

        return (
            <DropMenu key={ind}>
                <Context>Select {description} :</Context>
                <Dropdown option={CategoryData[item]} item={description} name={item} />
            </DropMenu>
        )
    })


    return (
        <Container style={{ display: watcher ? props.displayer : "flex" }}>
            <Filter><h2>Filter</h2></Filter>
            {filterMenu}
            <Context style={{marginTop:20}}>Sort Price:</Context>
            <Sort
                type='number'
                value={props.filter.min}
                placeholder='MIN'
                onChange={(e) => props.updateFilter({ ...props.filter, min: e.currentTarget.value })} />

            <Line />

            <Sort
                type='number'
                value={props.filter.max}
                placeholder='MAX'
                onChange={(e) => props.updateFilter({ ...props.filter, max: e.currentTarget.value })} />

            <Actions>
                <Button onClick={processFilter}>Done</Button>
                {watcher && <Button href='/' onClick={closeCat} >cancel</Button>}
            </Actions>
        </Container>
    );
}

const mapStateToProps = ({ ItemsReducer, EffectReducer }) => ({
    categoryView: EffectReducer.categoryView,
    displayer: EffectReducer.categoryMenu,
    filter: ItemsReducer.filter
})


export default connect(mapStateToProps, {
    filterEffect: displayFilter,
    updateFilter
})(Category)
