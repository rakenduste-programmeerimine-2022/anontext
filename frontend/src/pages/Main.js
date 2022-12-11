import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from '@mui/system';
import { Hidden } from '@mui/material';
import Login from '../components/Login';
import Popup from 'reactjs-popup';
import '../components/Popup.css';
import TextEditor from '../components/TextEditor.js';
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const SearchBar = ({setSearchQuery}) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search"
      variant="outlined"
      placeholder="Search..."
      size="big"
      fullWidth
    />
  {/*  <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>  */}
  </form>
);

export default function Mainpage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <body style={{backgroundColor: '#002D51', height: '2000px',  }}
    >
      <div
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
          }}
        >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <Popup trigger={<Button style={{color: "darkgray",}}>Login</Button>} modal nested>
        <Login></Login>
        </Popup>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "left",
          flexDirection: "row", // Siin on vaja paremat flex lahendust kui lihtsalt left!!!!!!
          padding: 20
        }}
      >
      </div>
      <TextEditor ></TextEditor>
    </body>
  );
}