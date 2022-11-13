import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';

export default function Registrationpage() {
    return (
        <Container component="main" maxWidth="xs">
            <Box
            sx={{
            mx: 0,
            marginRight: 0,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            padding: 3,
                      }}
            >
            <Typography component="h1">
                Username:
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
                >
                </TextField>
            </Typography>
            <Typography component="h1">
                Email Address:
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                >
                </TextField>
            </Typography>
            <Typography component="h1" sx={{ mt: 0 }}>
                Password:
                <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="username"
                autoComplete="username"
                autoFocus
                >
                </TextField>
            </Typography>
            <Button variant='contained' sx={{ mt: 2 }}>
              Create Account
            </Button>
            </Box>
        </Container>
    )
}