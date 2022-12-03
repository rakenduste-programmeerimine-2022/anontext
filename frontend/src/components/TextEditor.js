import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { useState } from "react";

export default function TextEditor() {
    const [editor] = useState(() => withReact(createEditor()))
    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]
    return (
        <Slate editor={editor} value={initialValue}>
        <Editable
            onKeyDown={event => {
                if (event.key === '&') {
                    event.preventDefault()
                    editor.insertText('and')
                }
            }}
        />
        </Slate>
    )
}