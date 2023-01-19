import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';
import { Slate, Editable, withReact} from 'slate-react';
import { createEditor, Text, Editor, Transforms, Element as SlateElement, Descendant } from 'slate';
import { useState, useCallback, useMemo} from "react";
import { withHistory } from 'slate-history';

export default function SearchElement() {
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <Slate editor={editor} value={initialValue}>
          <div
            style={{
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              margin: "auto",
              gap: 20,
             }}
          >
            <Button>
                <Editable
                readOnly
                style={{
                    backgroundColor: 'darkgray',
                    marginTop: '10px',
                    minHeight: '200px',
                    maxHeight: '200px',
                    maxWidth: '400px',
                    minWidth: '400px',
                }}
                />
            </Button>
                <Editable
                style={{
                    backgroundColor: 'darkgray',
                    marginTop: '10px',
                    minHeight: '200px',
                    maxHeight: '200px',
                    maxWidth: '400px',
                    minWidth: '400px',
                }}
                />
          </div>
            
        </Slate>
    )
}

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: '<h1>Tere Maailm</h1>' }],
    },
  ]


  