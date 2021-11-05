import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import login from '../../../images/login.png'
const Login = () => {
    const { user, loginUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const location = useLocation();
    const history = useHistory();
    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" sx={{ mt: 5 }} style={{ color: '#5CE7ED' }}>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                            type="password" />



                        <Button type="submit" sx={{ width: '75%', mt: 3, backgroundColor: '#289ca1' }} variant="contained">Login</Button>
                        <br />
                        <NavLink to="/register" style={{ marginTop: '10px', textDecoration: 'none' }}>
                            <Button variant="text">New User?</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}

                        {user?.email &&
                            <Alert severity="success">User Login Successfull.</Alert>

                        }
                        {authError && <Alert severity="error">{authError}!</Alert>
                        }
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ maxWidth: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;