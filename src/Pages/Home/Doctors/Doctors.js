import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://nameless-castle-61219.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h3>Our Doctors: {doctors.length}</h3>

            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} />)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Doctors;