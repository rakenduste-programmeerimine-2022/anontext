import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import * as React from 'react';
import {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault();

        //bruh ugly v2
        var data = {
            username: username,
            password: password
        }

        const resp = await fetch(
            "http://localhost:8080/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
        })
        
        const respJson = await resp.json()

        if (resp.status == 400) {
            setError(respJson.message)
        }

        if (resp.status == 200) {
            setError("User logged in!")
            localStorage.setItem("token", respJson.token);

            //salvestame kasutajanime ka
            localStorage.setItem("username", username)
            window.location.reload(false);
        }
    }

    return (
            <form onSubmit={handleSubmit}>
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
                onChange={i => setUsername(i.target.value)}
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
                name="password"
                autoComplete="password"
                autoFocus
                onChange={i => setPassword(i.target.value)}
                >
                </TextField>
            </Typography>
            <Link href="/Registration">
                No account? Click here to register
            </Link>
            <Button variant='contained' sx={{ mt: 2 }} type="submit">
              Login
            </Button>
            </Box>
            </form>
    )
}

export default Login