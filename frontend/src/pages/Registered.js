import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Login from '../components/Login.js';
import Popup from 'reactjs-popup';
import '../components/Popup.css';
import TextEditor from '../components/TextEditor.js';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Settings from '../components/Settings.js';
import { IconButton } from '@mui/material';

document.body.style = 'background: #002D51;';

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

export default function Registered() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <body 
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: "row",
          padding: 25,
          gap: 3
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            position: "relative",
          }}
        >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <Button onClick={{}} sx={{color: 'white' }}>Logout</Button>
          <div
            style={{
              display: "flex",
              position: "relative",
              left: "100px" // Pole täiesti rahul aga las olla nii praegu
            }}
          > 
          <Popup trigger={<Button variant='contained' color = "success" endIcon={<EventNoteIcon />}>Save note</Button>} modal nested>
            <Settings></Settings>
          </Popup>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "left",
          flexDirection: "row",
          padding: 10,
      }} 
      >
      <TextEditor ></TextEditor>
      </div>
    </body>
  );
}