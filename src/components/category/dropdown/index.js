import React, { useState } from 'react';
import Select from 'react-select';

import { Container, customStyle } from "./style";

const initialData = [{ value: "one", label: "one" }, { value: "two", label: "two" }, { value: "three", label: "three" }, { value: "four", label: "four" }]

export default function Dropdown(props) {
    const [state, setstate] = useState("initialState")

    // if a value changes here it woukld make a call to redux
    // const fetchFilter = () => {
    //     updateFilter({ ...filter, [props.name]: state })
    //     fetchData({ ...filter, [props.name]: state })
    // }

    return (
        <Container>
            <Select
                value={state}
                styles={customStyle}
                label="Single select"
                placeholder={`Pick a ${props.item}`}
                onChange={setstate}
                options={props.option}
                isSearchable={false}
            />
        </Container>
    );
}
