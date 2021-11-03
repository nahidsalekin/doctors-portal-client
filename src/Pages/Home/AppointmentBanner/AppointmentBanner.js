import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor}
                        style={{ width: 400, marginTop: '-100px' }}
                        alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mt: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio asperiores eveniet similique id quasi, modi quia quos tempora, expedita, quod ipsam libero dignissimos cum perferendis fugit exercitationem. Aliquam cumque porro itaque facere labore consequatur temporibus facilis possimus excepturi, explicabo accusantium quod aperiam nulla tempore nesciunt expedita minus quo corporis officiis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;