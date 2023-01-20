import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import '../components/Popup.css';
import BetterTextEditor from '../components/BetterTextEditor.js';

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
          <Button onClick={{}} sx={{color: 'white', left: 60 }}>Logout</Button>
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
      <BetterTextEditor ></BetterTextEditor>
      </div>
    </body>
  );
}