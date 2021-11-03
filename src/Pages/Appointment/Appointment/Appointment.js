import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../Appointmentheader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date.toDateString()} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date.toDateString()}></AvailableAppointments>
        </div>
    );
};

export default Appointment;