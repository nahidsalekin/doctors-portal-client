import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not matched!');
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" sx={{ mt: 5 }} style={{ color: '#5CE7ED' }}>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleSubmit}>
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard"
                            type="password" />

                        <Button type="submit" sx={{ width: '75%', mt: 3, backgroundColor: '#289ca1' }} variant="contained">Register</Button>
                        <br />
                        <NavLink to="/login" style={{ marginTop: '10px', textDecoration: 'none' }}>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}

                    {user?.email &&
                        <Alert severity="success">User Created Successfully!</Alert>

                    }
                    {authError && <Alert severity="error">{authError}!</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ maxWidth: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;