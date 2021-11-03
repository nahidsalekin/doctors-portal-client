import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, Box } from '@mui/material';

import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: 300, color: 'gray', fontSize: 13 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, molestiae cumque non reiciendis doloremque aliquam animi odio neque qui! Iste?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} style={{ width: '350px' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;