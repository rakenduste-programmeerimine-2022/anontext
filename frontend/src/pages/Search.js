import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Login from '../components/Login.js';
import Popup from 'reactjs-popup';
import '../components/Popup.css';
import SearchElement from '../components/SearchElement.js';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Settings from '../components/Settings.js';
import { IconButton } from '@mui/material';

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

export default function Searchpage() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
      <body style={{backgroundColor: '#002D51', height: '1000px',  }}
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
          <Popup trigger={<Button style={{color: "darkgray",}}>Login</Button>} modal nested>
            <Login></Login>
          </Popup>
            <div
              style={{
                display: "flex",
                position: "relative",
                left: "100px" // Pole täiesti rahul aga las olla nii praegu
              }}
            > 
            <Popup trigger={<Button style={{color: "darkgray",}} endIcon={<SettingsSuggestIcon />}>Settings</Button>} modal nested>
              <Settings></Settings>
            </Popup>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: "row",
            padding: 10,
        }} 
        >
        <SearchElement></SearchElement>
        </div>
      </body>
    )
}