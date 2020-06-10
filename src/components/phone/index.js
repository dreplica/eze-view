import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import LittleSpinner from '../spinner/littleSpinner';
import {
	Container,
	Price,
	Text,
	Image,
	Button,
} from './style';

export default function Phone({ name, price, locked, image, memory, sale, condition }) {
	const [state, setstate] = useState(true)
	useEffect(() => {
		const abort = new AbortController()
		const { signal } = abort
		loader(signal)
		return () => {
			abort.abort()
		}
	}, [])
	const loader = async (signal) => {
		fetch(`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${image}`, { signal:signal})
			.then(() => setstate(false))
			.catch((e) => console.log("coulnt load"))
	}

	const suspense = () => {
		return state
			? <LittleSpinner path='./assets/phonespin.gif' width='50%' /> 
			: <Image src={`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${image}`} alt="phone" />
	}

	return (
		<Container>
			<Price>${price} - {condition}</Price>
			{suspense()}
			<Text style={{ fontWeight: 'bolder' }}>{name}</Text>
			<Text>{locked} | {memory}GB</Text>
			<Button>{sale}</Button>
		</Container>
	);
}
