import * as React from 'react';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import '../components/Popup.css';
import SearchElement from '../components/SearchElement.js';

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
    document.body.style = 'background: #002D51;';
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