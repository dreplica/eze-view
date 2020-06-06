import React, { useState } from 'react';
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

	const loader = () => {
		Axios.get(`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${image}`)
			.then(() => setstate(false))
			.catch((e) => console.log("coulnt load"))
	}

	loader()

	return (
		<Container>
			<Price>${price} /{condition}</Price>
			{
				state
					? <LittleSpinner path='./assets/phonespin.gif' width='50%' />
					: <Image src={`https://res.cloudinary.com/dyypxjmx9/image/upload/v1591388430/eze/${image}`} alt="phone" />
			}
			<Text style={{ fontWeight: 'bolder' }}>{name}</Text>
			<Text>{locked} | {memory}GB</Text>
			<Button>{sale}</Button>
		</Container>
	);
}
