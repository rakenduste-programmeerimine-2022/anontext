import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import NoPage from "./pages/Nopage";
import Search from './pages/Search';
import Saved from './pages/Saved';
import ViewPost from './pages/ViewPost'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path='/Saved' element={<Saved />} />
        <Route path='/post/:postid' element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);