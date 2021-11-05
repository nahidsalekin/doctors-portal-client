import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, Box } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}
const infoStyle = {
    textAlign: 'justify',
    color: 'white',
    padding: '15px 20px'
};
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ justifyContent: 'between' }}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, lineHeight: 2, pr: 8 }} style={{ fontWeight: 300, color: 'gray', fontSize: 14 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, molestiae cumque non reiciendis doloremque aliquam animi odio neque qui! Iste?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#18abb1' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} style={{ maxWidth: '100%' }} alt="" />
                </Grid>
            </Grid>

            <Box sx={{ flexGrow: 1, mt: 5 }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={12} md={4}>
                        <Box style={infoStyle} sx={{ backgroundColor: '#18abb1' }}>
                            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                <Grid item xs={2}>
                                    <AccessTimeIcon sx={{ fontSize: 45 }}></AccessTimeIcon>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                        Opening Hours
                                    </Typography>
                                    <Typography variant="caption">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, incidunt.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={infoStyle} sx={{ backgroundColor: '#1e3946eb' }}>
                            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                <Grid item xs={2}>
                                    <RoomIcon sx={{ fontSize: 45 }}></RoomIcon>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                        Opening Hours
                                    </Typography>
                                    <Typography variant="caption">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, incidunt.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={infoStyle} sx={{ backgroundColor: '#18abb1' }}>
                            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                <Grid item xs={2}>
                                    <AddIcCallIcon sx={{ fontSize: 45 }}></AddIcCallIcon>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                        Opening Hours
                                    </Typography>
                                    <Typography variant="caption">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, incidunt.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>


                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;