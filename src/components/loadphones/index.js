import React from 'react';

import { Container, Link, } from './style'

export default function LoadPhones() {
    const load = () => {

    }
    return (
        <Container>
            <Link onClick={load}>Load Phones</Link>
        </Container>
    );
}
