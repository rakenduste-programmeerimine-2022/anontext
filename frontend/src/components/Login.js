import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import * as React from 'react';

export default function Login() {
    return (
            <Box
            sx={{
            mx: 0,
            marginRight: 0,
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
            <Link href="/Registration">
                No account? Click here to register
            </Link>
            <Button variant='contained' sx={{ mt: 2 }}>
              Login
            </Button>
            </Box>
    )
}