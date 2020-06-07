import React, { useEffect, useState } from 'react';

import Loadphones from '../loadphones';
import { Container, Filter } from './style'
import { displayFilter } from '../../store/actioncreators/effects';
import { connect } from 'react-redux';

function TopIcons({ setfilter }) {

    const [state, setbutton] = useState({ button: false, cover: false })

    useEffect(() => {
        if (window.innerWidth < 850) {
            setbutton({ ...state, button: true })
        }
        window.addEventListener("resize", showButton, false)

        return () => window.addEventListener("resize", showButton, false)

    }, [window.innerWidth])

    const showButton = () => {
        if (window.innerWidth < 850) {
            setbutton({ ...state, button: true })
            return
        }
        setbutton({ ...state, button: false })
    }

    const showFilter = () => {
        setfilter("open")
        setbutton({ ...state, cover: true })
    }

    return (
        <Container>
            {/* <Cover style={{}}/> */}
            {state.button && <Filter onClick={showFilter} src='/assets/menu.svg' alt='filter' />}
            <Loadphones />
        </Container>
    );
}


const mapStateTOProps = ({ EffectReducer }) => ({

})

export default connect(null, { setfilter: displayFilter })(TopIcons)