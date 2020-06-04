import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Input = styled.input`
	width: 60%;
	height: 50px;
	border-radius: 10px;
	padding: 5px 10px;
	border-width: 0px;
`;

export const Button = styled.button`
	width: 33%;
	height: 50px;
	border-width: 0px;
	border-radius: 10px;
	color: white;
	font-weight: bold;
	font-size: 1em;
	background: #0000d8;

	:hover {
		cursor: pointer;
		border: 2px solid white;
	}
`;
