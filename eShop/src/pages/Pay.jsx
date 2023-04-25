import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const KEY =
	'pk_test_51Muls5KzlmrOGeIw29VaoEqFzsjWCY7WqXBMIjLi9Fe8j7BVyI27OltLaIggleb4fwEtGvjrt8wwVeZSFNkMBSLr001RpySbAf';

const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const postRequest = async () => {
			try {
				const response = await axios.post(
					`${import.meta.env.VITE_DB_URI}/checkout/payment`,
					{
						tokenID: stripeToken.id,
						amount: 2000,
					}
				);
				console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		postRequest();
	}, [stripeToken]);

	return (
		<div>
			<StripeCheckout
				name="Lost Skate Shop"
				image="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
				billingAddress
				shippingAddress
				description="Your total is $20"
				amount={2000}
				token={onToken}
				stripeKey={KEY}
			>
				<button>Pay Now</button>
			</StripeCheckout>
		</div>
	);
};

export default Pay;
