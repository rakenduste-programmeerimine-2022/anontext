import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import * as React from 'react';

export default function SearchElement() {

    return (
          <div
            style={{
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              margin: "auto",
              gap: 20,
             }}
          >
            <Button
                style={{
                    backgroundColor: 'darkgray',
                    marginTop: '10px',
                    minHeight: '200px',
                    maxHeight: '200px',
                    maxWidth: '400px',
                    minWidth: '400px',
                }}
                >
            </Button>
            <Button
                style={{
                    backgroundColor: 'darkgray',
                    marginTop: '10px',
                    minHeight: '200px',
                    maxHeight: '200px',
                    maxWidth: '400px',
                    minWidth: '400px',
                }}
                >
            </Button>
          </div>
    )
}
  