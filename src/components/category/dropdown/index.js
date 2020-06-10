import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import {fetchData,updateFilter } from "../../../store/actions/items"
import { Container, customStyle } from "./style";


 function Dropdown(props) {

    // if a value changes here it woukld make a call to redux
     const fetchFilter = (value) => {
        // updateFilter({ ...filter, [props.name]: state })
        const key = props.item.toLowerCase()
        props.updateFilter({ ...props.filter, [key]: value.value })
    }

    return (
        <Container>
            <Select
                value={"lo"}
                styles={customStyle}
                label="Single select"
                placeholder={`Pick a ${props.item}`}
                onChange={fetchFilter}
                options={props.option}
                isSearchable={false}
                maxMenuHeight={200}
                menuPlacement='top'
                menuPosition='fixed'
            />
        </Container>
    );
}

const mapStateToProps = ({ItemsReducer}) => ({
    filter:ItemsReducer.filter
})

export default connect(mapStateToProps,{fetchData,updateFilter})(Dropdown)