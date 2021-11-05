import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png'
import { Button, TextField, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundSize: 'cover',
    padding: '20px 30px'
}
const formInput = {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    marginBottom: '16px'
}
const ContactFormBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid xs={12} md={7} sx={{ mx: 'auto' }}>
                <Typography variant="h6" sx={{ mt: 5 }} style={{ color: '#5CE7ED' }}>
                    CONTACT US
                </Typography>
                <Typography variant="h4" sx={{ mb: 5 }} style={{ color: 'white' }}>
                    Always Connect With Us
                </Typography>
                <form action="">
                    <TextField style={formInput} placeholder="Email Address*" required />
                    <TextField style={formInput} placeholder="Subject*" required />
                    <TextField style={formInput} multiline rows={10} placeholder="Your Message*" required />
                    <Button type="submit" variant="contained" sx={{ px: 5 }} style={{ backgroundColor: '#289ca1' }}>SUBMIT</Button>
                </form>
            </Grid>
        </Box>

    );
};

export default ContactFormBanner;