import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import * as React from 'react';

export default function SearchElement(props) {

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
                onClick={event =>  window.location.href='/post/' + props.link}
                sx={{textTransform: "none"}}
                style={{
                    backgroundColor: 'darkgray',
                    marginTop: '10px',
                    minHeight: '200px',
                    maxHeight: '200px',
                    maxWidth: '400px',
                    minWidth: '400px',  
                }}
                >
                <Typography text-transform={false} margin="4px" position="absolute" left="0px" top="0px" align="right">{props.content}</Typography>
            </Button>
          </div>
    )
}
  