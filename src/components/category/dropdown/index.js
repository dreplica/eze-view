import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { fetchData, updateFilter } from "../../../store/actioncreators/items"
import { customStyle } from "./style";


function Dropdown(props) {

    const [key] = useState(props.name.toLowerCase())
    const [state, setState] = useState({value:"",label:""})

    useEffect(() => {
        setState({
            value: props.filter[key],
            label: props.filter[key]
        })
    }, [props.filter])

    const fetchFilter = (value) => {
        props.updateFilter({ ...props.filter, [key]: value.value })
        setState(value)

    }

    return (
        <Select
            styles={customStyle}
            defaultValue={{ value: props.filter[key], label: 10 }}
            label="Single select"
            value={state}
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

const mapStateToProps = ({ ItemsReducer }) => ({
    filter: ItemsReducer.filter
})

export default connect(mapStateToProps, { fetchData, updateFilter })(Dropdown)