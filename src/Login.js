import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', { username, password });
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '100px' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ margin: '24px 0 16px' }}
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
