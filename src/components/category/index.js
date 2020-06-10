import React, { useState, useEffect, Fragment } from 'react';

import { connect } from 'react-redux';
import { displayFilter } from '../../store/actioncreators/effects';
import { Container, Filter, Context,DropMenu } from './style';
import Dropdown from './dropdown';
import CategoryData from "../../lib/category.json";

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

    const closeCat = (e) => {
        e.preventDefault()
        props.filterEffect('close')
    }

    const keys = Object.keys(CategoryData)

    const filterMenu = keys.map((item) => <DropMenu>
        <Context>Select {item} :</Context>
        <Dropdown option={CategoryData[item]} item={item}/>
    </DropMenu>)

    return (
        <Container style={{
            // display: watcher ?props.displayer:"flex"
        }}>
            <Filter><span>Filter</span> {watcher && <a href='/' onClick={closeCat} >cancel</a>}</Filter>
            {filterMenu}

        </Container>
    );
}

const mapStateToProps = ({ EffectReducer }) => ({
    categoryView: EffectReducer.categoryView,
    displayer: EffectReducer.categoryMenu,
})


export default connect(mapStateToProps, {
    filterEffect: displayFilter,
})(Category)
