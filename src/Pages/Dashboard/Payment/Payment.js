import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JwqXtG2uuDDorX1Xkj4C0E5ul5wXTZvjdRHAvp0xWrJESMVlXM0DOJN11VzLy1XGv9gKE6BRZfJEUU1LDgOzWi100WyWoQLFX');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://nameless-castle-61219.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h3>Please Pay for: {appointment.patientName}</h3>
            <h4> for {appointment.serviceName}</h4>
            <h5>Pay: ${appointment.price}</h5>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckOutForm appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;