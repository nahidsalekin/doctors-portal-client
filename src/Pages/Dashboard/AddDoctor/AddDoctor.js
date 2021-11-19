import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();

        if (!image) {
            alert('Please choose an Image')
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://nameless-castle-61219.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('doctor added successfully')
                }
            }
            )
    }
    return (
        <div>
            <h3>Add a doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '75%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                />
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Email"
                    required
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                />
                <br />
                <Input accept="image/*"
                    sx={{ width: '75%', my: 3 }}
                    onChange={e => setImage(e.target.files[0])}
                    type="file" />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>

            </form>
        </div>
    );
};

export default AddDoctor;