import { Container, CssBaseline, TextField, Typography, Button} from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';
import axios from 'axios';

document.body.style = 'background: #002D51;';

const Registration = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async e => {
        //et leht ei refreshiks
        e.preventDefault();

        //bruh ugly
        var data = {
            username: username,
            email: email,
            password: password
        }

        const resp = await fetch(
            "http://localhost:8080/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
        })
        
        const respJson = await resp.json()

        if (resp.status == 400) {
            setError(respJson.message)
        }

        if (resp.status == 200) {
            setError("User registered!")
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
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
                {error && <Typography>{error}</Typography>}
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
                    onChange={i => setUsername(i.target.value)}
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
                    onChange={i => setEmail(i.target.value)}
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
                    name="password"
                    autoComplete="username"
                    autoFocus
                    onChange={i => setPassword(i.target.value)}
                    >
                    </TextField>
                </Typography>
                <Button
                    variant='contained' sx={{ mt: 2 }}
                    type="submit"
                    
                >
                Create Account
                </Button>
                </Box>
            </form>
        </Container>
    )
}

export default Registration