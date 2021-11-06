import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const linkItem = {
    color: 'gray',
    fontSize: '18px',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '12px'
}
const Footer = () => {
    return (
        <Box sx={{ p: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                        ...
                    </Typography>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                        Services
                    </Typography>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                        Our Health
                    </Typography>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                        Our Address
                    </Typography>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                    <Link style={linkItem} to="/">Emmergency Dental Care</Link>
                </Grid>

                <Typography variant="caption" style={{ color: 'gray', fontSize: 16, marginTop: '50px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Copyright 2021, All Rights Reserved.
                </Typography>
            </Grid>
        </Box>
    );
};

export default Footer;