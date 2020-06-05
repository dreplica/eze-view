import React, { useState, useEffect } from 'react';

import { Container } from './style'
import { Link } from 'react-router-dom';

const nav = ['home', 'buy', 'sell']

export default function Navigate() {
    const [state, setState] = useState({ nav: nav, count: 0 })
    const path = window.location.pathname.replace("/", "")

    useEffect(() => {
        const index = !path?0: state.nav.indexOf(path)
        setState({...state,count:index})
    }, [path])

    const style = (ind) => ({
        color: state.count === ind ? 'white' : 'grey',
        fontSize: state.count === ind ?'1.2em':'',
        fontWeight: state.count === ind ?'bold':'',
        borderBottom: state.count === ind ? '2px solid white' : 'none',
        paddingBottom: state.count === ind ? '15px' : '5px',
        background: state.count === ind ? 'rgba(200,200,200,0.3)' : '',
    })

    return (
        <Container>
            {
                state.nav.map((link, ind) =>
                    <Link
                        key={ind}
                        to={`/${link === 'home' ? '' : link.toLowerCase()}`}
                        style={style(ind)}
                        onClick={() => setState({ ...state, count: ind })}>
                        {link}
                    </Link>)
            }
        </Container>
    );
}
