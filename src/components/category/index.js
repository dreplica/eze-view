import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { displayFilter } from '../../store/actions/effects';
import { Container, Filter, Context, DropMenu, Actions, Button } from './style';
import Dropdown from './dropdown';
import CategoryData from "../../lib/category.json";
import { fetchData } from '../../store/actions/items';

function Category(props) {

    const [watcher, setWatch] = useState(false)

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

    const processFilter = async () => {
        alert(typeof props.fetch)
        await props.fetchData({ ...props.filter })
            (window.innerWidth < 850) && props.filterEffect('close')
    }


    const closeCat = (e) => {
        e.preventDefault()
        props.filterEffect('close')
    }

    const keys = Object.keys(CategoryData)

    const filterMenu = keys.map((item, ind) => <DropMenu key={ind}>
        <Context>Select {item} :</Context>
        <Dropdown option={CategoryData[item]} item={item} />
    </DropMenu>)

    return (
        <Container style={{
            display: watcher ? props.displayer : "flex"
        }}>

            <Filter><span>Filter</span></Filter>
            {filterMenu}
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
    fetchData
})(Category)
