import React from 'react';

import { Container,Title,Display,Drop } from "./style";

const initialData = ["one", "two", "three", "four"]

export default function Dropdown(props=initialData) {
    return (
        <Container>
            <Title></Title>
            <Display></Display>
            <Drop></Drop>
        </Container>
    );
}
