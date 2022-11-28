import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import LoadingSpinner from '../../Sections/Common/LoadingSpinner';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const furniture = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }

    const {name, resale_price} = furniture;

    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Please pay <strong>${resale_price}</strong> for {name}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        furniture={furniture}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;