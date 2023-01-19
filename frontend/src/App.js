import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import NoPage from "./pages/Nopage";
import Registered from "./pages/Registered";
import Search from './pages/Search';
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { useState } from 'react';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/Registered" element={<Registered />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);