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

export default function Phone({ name, price, locked, memory, sale, condition }) {
	
	const [state, setstate] = useState({
		loading: true,
		sale:""
	})

	useEffect(() => {
		setstate({
			...state,
			sale: sale.replace(/\w$/, "").toLocaleUpperCase(),
			image: name.replace(/\s/g, "_").toLocaleLowerCase(),
			lock: locked ? "Locked" : "Unlocked",
			loading: false})
	}, [])

	
	// const loader = () => {
	// 	Axios.get(`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${state.image}.png`)
	// 		.then(() => setstate({...state,loading:false}))
	// 	.catch((e)=>console.log("coulnt load"))
	// }
	
	
	return (
		<Container>
			<Price>${price} /{condition}</Price>
			{ state.loading ?<LittleSpinner path='/assets/phonespin.gif' width='50%' />:
			<Image src={`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${state.image}`} alt="phone" />
			}
			<Text style={{ fontWeight: 'bolder' }}>{name}</Text>
			<Text>{state.lock} | {memory}GB</Text>
			<Button>{state.sale}</Button>
		</Container>
	);
}
