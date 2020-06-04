import React from 'react';

import { Container, Price, Text, Image, Button } from './style';

export default function Phone() {
	return (
		<Container>
			<Price>$500</Price>
			<Image src="/assets/five.jpg" alt="phone" />
			<Text style={{fontWeight:'bolder'}}>iPhone 5s</Text>
			<Text>Unlocked | 256GB</Text>
			<Button>BUY</Button>
		</Container>
	);
}
