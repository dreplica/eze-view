import React, { useState } from 'react';

import { Container } from './style'
import { Link } from 'react-router-dom';

const nav = ['Home', 'Buy', 'Sell']

export default function Navigate() {
    const [state, setState] = useState({ nav: nav, count: 0 })

    const style = (ind) => ({
        color: state.count === ind ? 'white' : 'grey',
        fontSize: state.count === ind ?'1.2em':'',
        fontWeight: state.count === ind ?'bold':'',
        borderBottom: state.count === ind ? '2px solid white' : 'none',
        paddingBottom: state.count === ind ? '15px' : '5px',
    })
    return (
        <Container>
            {
                state.nav.map((link, ind) =>
                    <Link
                        key={ind}
                        to={`/${link === 'Home' ? '' : link.toLowerCase()}`}
                        style={style(ind)}
                        onClick={() => setState({ ...state, count: ind })}>
                        {link}
                    </Link>)
            }
        </Container>
    );
}
