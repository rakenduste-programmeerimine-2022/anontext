import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Login from '../components/Login.js';
import Popup from 'reactjs-popup';
import '../components/Popup.css';
import BetterTextEditor from '../components/BetterTextEditor.js';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Settings from '../components/SettingsGuest.js';
import { IconButton, Typography } from '@mui/material';

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

const Mainpage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  //vaatame, kas kasutaja on sisse logitud
  var logged = false

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");
  if (username && token) {
    logged = true
  }

  let navbarElements

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
        {logged && <Typography style={{position: "relative",color: "white", fontFamily: "Cursive", left: 25 }}>Hello, {username}
        <Button variant='contained' style={{backgroundColor:"darkred",position: "relative", left: 15}}>Logout</Button>
        </Typography>}
        {!logged &&
          <Popup trigger={<Button style={{color: "darkgray",}}>Login</Button>} modal nested>
            <Login></Login>
          </Popup>
        }
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

export default Mainpage