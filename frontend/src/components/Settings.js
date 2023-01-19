import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';

export default function Settings() {
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
                <Typography component="h1" sx={{ alignItems: 'center', display: 'flex', gap: 3 }}>
                    <Button variant='contained' sx={{ mt: 0 }}>
                        Generate link
                    </Button>
                    <TextField style={{backgroundColor: 'white', width: 300}}>
                        
                    </TextField>
                </Typography>
                <Box sx={{marginTop: 5}}>
                    Siis kui registreeritud tuleb siia veel:
                    <p></p>Mingi salvestuse nupp, private või public
                    <p></p>Notes also go here lmao?
                </Box>
            </Box>
    )
}