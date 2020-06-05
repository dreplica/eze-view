import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LittleSpinner from '../spinner/littleSpinner';
import {
	Container,
	Price,
	Text,
	Image,
	Button,
} from './style';

export default function Phone({ name="iphone 6", price, locked, memory, sale="sell", condition }) {
	
	const [state, setstate] = useState({
		image: name.replace(" ", "_"),
		lock: locked ? "Locked" : "Unlocked",
		loading:true
	})

	useEffect(() => {
	  loader()
	}, [])

	const loader = () => {
		Axios.get(`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${state.image}.png`)
			.then(() => setstate({...state,loading:false}))
		.catch((e)=>console.log("coulnt load"))
	}
	
	
	return (
		<Container>
			<Price>${price} /{condition}</Price>
			{ state.loading ?<LittleSpinner path='/assets/phonespin.gif' width='50%' />:
			<Image src={`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${state.image}.png`} alt="phone" />
			}
			<Text style={{ fontWeight: 'bolder' }}>{name}</Text>
			<Text>{state.lock} | {memory}GB</Text>
			<Button>{sale.toLocaleUpperCase()}</Button>
		</Container>
	);
}
