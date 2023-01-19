import { Container, CssBaseline, TextField, Typography, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';

export default function SettingsRegistered() {
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
                <p>Save note as:</p>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 0,}}>
                    <FormControlLabel control={<Checkbox />} label="Public" />
                    <FormControlLabel control={<Checkbox />} label="Private" />
                </div>
                <Button variant='contained' style={{display: 'flex', position: 'relative', alignItems: 'center', marginTop: 15}}>
                        Save Note
                </Button>
                <p></p>Saved notes go here:
            </Box>
    )
}