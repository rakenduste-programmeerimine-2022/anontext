import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Login from '../components/Login.js';
import Popup from 'reactjs-popup';
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

export default function Mainpage() {
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
        <Popup trigger={<Button style={{color: "white", left: 60}}>Login</Button>} modal nested>
          <Login></Login>
        </Popup>
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