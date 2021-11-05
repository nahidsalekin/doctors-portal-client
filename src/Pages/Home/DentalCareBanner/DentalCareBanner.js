import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    marginTop: 175,
}
const DentalCareBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, px: 5, justifyContent: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img src={treatment}
                        style={{ maxWidth: '80%' }}
                        alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h4">
                            Exceptional Dental Care, <br /> on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, pr: 5 }} style={{ color: 'gray', fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio asperiores eveniet similique id quasi, modi quia quos tempora, expedita, quod ipsam libero dignissimos cum perferendis fugit exercitationem. Aliquam cumque porro itaque facere labore consequatur temporibus facilis possimus excepturi, explicabo accusantium quod aperiam nulla tempore nesciunt expedita minus quo corporis officiis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#289ca1' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DentalCareBanner;