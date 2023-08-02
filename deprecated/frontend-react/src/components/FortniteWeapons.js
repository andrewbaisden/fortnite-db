import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Weapons from './Weapons';
import styled, { createGlobalStyle } from 'styled-components';

// Styled Components
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

	/* KEYFRAMES */

	@keyframes spin {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(359deg);
		}
	}

	@keyframes spin3D {
		from {
			transform: rotate3d(0.5, 0.5, 0.5, 360deg);
		}
		to {
			transform: rotate3d(0deg);
		}
	}

	@keyframes configure-clockwise {
		0% {
			transform: rotate(0);
		}
		25% {
			transform: rotate(90deg);
		}
		50% {
			transform: rotate(180deg);
		}
		75% {
			transform: rotate(270deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes configure-xclockwise {
		0% {
			transform: rotate(45deg);
		}
		25% {
			transform: rotate(-45deg);
		}
		50% {
			transform: rotate(-135deg);
		}
		75% {
			transform: rotate(-225deg);
		}
		100% {
			transform: rotate(-315deg);
		}
	}

	@keyframes pulse {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0.25;
			transform: scale(0.75);
		}
	}

`;

const PageContainer = styled.div`
	display: flex;
	background: #3d34ed;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

const Loading = styled.p`
	font-size: 5rem;
	color: #ffffff;
	text-transform: uppercase;
	font-family: 'Open Sans', sans-serif;
`;

const SpinnerBox = styled.div`
	width: 300px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
`;

/* ALTERNATING ORBITS */

const CircleBorder = styled.div`
	width: 150px;
	height: 150px;
	padding: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: rgb(63, 249, 220);
	background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, rgba(63, 249, 220, 1) 100%);
	animation: spin 0.8s linear 0s infinite;
`;

const CircleCore = styled.div`
	width: 100%;
	height: 100%;
	background-color: #3d34ed;
	border-radius: 50%;
`;

class Fortnite extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: '',
		};
	}
	getApi() {
		return (
			<Query
				query={gql`
					query {
						fortniteweaponsfiltername {
							id
							name
							weaponType
							itemRarity
							img
							information {
								damage
								critialHitChance
								critialHitDamage
								fireRate
								magazineSize
								range
								durabilty
								reloadTime
								ammoCost
								impact
							}
						}
					}
				`}
			>
				{({ loading, error, data }) => {
					if (loading)
						return (
							<PageContainer>
								<GlobalStyle />
								{/* <Loading>Loading</Loading> */}
								<SpinnerBox>
									<CircleBorder>
										<CircleCore></CircleCore>
									</CircleBorder>
								</SpinnerBox>
							</PageContainer>
						);
					if (error)
						return (
							<PageContainer>
								<GlobalStyle />
								<Loading>Error :(</Loading>
							</PageContainer>
						);

					let weapons = data.fortniteweaponsfiltername.map((w) => w);

					return <Weapons weapons={weapons} />;
				}}
			</Query>
		);
	}
	render() {
		return (
			<div>
				<div>{this.getApi()}</div>
			</div>
		);
	}
}

export default Fortnite;
