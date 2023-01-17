import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';
import { createEditor, Text } from 'slate';
import { Slate, Editable, withReact} from 'slate-react';
import { useState, useCallback } from "react";
import { Editor, Transforms } from 'slate';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';

const CustomEditor = {
    isBoldMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
      })
  
      return !!match
    },
  
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
  }
  
const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

export default function TextEditor() {
    const [editor] = useState(() => withReact(createEditor()))
    const renderElement = useCallback(props => {
        switch (props.element.type) {
          case 'code':
            return <CodeElement {...props} />
          default:
            return <DefaultElement {...props} />
        }
      }, [])

      const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
      }, [])

      return (
        <Slate editor={editor} value={initialValue}>
          <div
            style={{
              position: 'relative', 
              backgroundColor: 'darkgray',
              margin: "auto",
              width: "90em",
             }}
          >
            <div
              contentEditable={false}
              style={{ position: 'relative', top: '5px' }}
            >
              <IconButton
                onMouseDown={event => {
                  event.preventDefault()
                  CustomEditor.toggleBoldMark(editor)
                }}
              >
              <FormatBoldIcon></FormatBoldIcon>
              </IconButton>
              <IconButton
                onMouseDown={event => {
                  event.preventDefault()
                  CustomEditor.toggleCodeBlock(editor)
                }}
              >
              <CodeIcon></CodeIcon>
              </IconButton>
            </div>
              <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={event => {
                  if (!event.ctrlKey) {
                    return
                  }
        
                  switch (event.key) {
                    case 'c': {
                      event.preventDefault()
                      CustomEditor.toggleCodeBlock(editor)
                      break
                    }
        
                    case 'b': {
                      event.preventDefault()
                      CustomEditor.toggleBoldMark(editor)
                      break
                    }
                  }
                }}
              />
            </div>
        </Slate>
      )
    }

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

const CodeElement = props => {
    return (
    <pre {...props.attributes}>
        <code>{props.children}</code>
    </pre>
    )
}

const Leaf = props => {
    return (
      <span
        {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
      >
        {props.children}
      </span>
    )
  }