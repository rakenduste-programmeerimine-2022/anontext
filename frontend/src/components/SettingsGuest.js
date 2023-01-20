import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export default function SettingsGuest() {
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
                    <TextField inputProps={{readOnly: true,}} style={{backgroundColor: 'white', width: 300}}>
                        
                    </TextField>
                </Typography>
            </Box>
    )
}