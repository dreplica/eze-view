import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import {fetchData,updateFilter } from "../../../store/actions/items"
import {  customStyle } from "./style";


 function Dropdown(props) {

     const fetchFilter = (value) => {
        const key = props.name.toLowerCase()
        props.updateFilter({ ...props.filter, [key]: value.value })
    }

    return (
            <Select
                styles={customStyle}
                label="Single select"
                placeholder={`Pick a ${props.item}`}
                onChange={fetchFilter}
                options={props.option}
                isSearchable={false}
                maxMenuHeight={200}
                menuPlacement={'top'}
                menuPosition={'fixed'}
            />
    );
}

const mapStateToProps = ({ItemsReducer}) => ({
    filter:ItemsReducer.filter
})

export default connect(mapStateToProps,{fetchData,updateFilter})(Dropdown)