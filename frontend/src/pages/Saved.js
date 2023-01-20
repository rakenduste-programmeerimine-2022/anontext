import * as React from 'react';
import { useState, useEffect } from "react";
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

export default function Saved() {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState([])
    const getAllPosts = async () => {

      const resp = await fetch(
        "http://localhost:8080/post/myposts", {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": window.localStorage.getItem("token") || ""},
    })
    
      const respJson = await resp.json()

      if (resp.status == 400) {
          return
      }

      if (resp.status == 200) {
        console.log(respJson)
        setPosts(respJson)
      }
  }

  const listAll = getAllPosts()
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
            <div
              style={{
                display: "flex",
                position: "relative",
                left: "100px" // Pole täiesti rahul aga las olla nii praegu
              }}
            > 
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: "column",
            padding: 10,
        }} 
        >
        {posts.map(post => <SearchElement content={post.content.substring(0, 100) + "..."} link={post.link} />)}
        </div>
      </body>
    )
}