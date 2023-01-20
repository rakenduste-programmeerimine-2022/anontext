import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import Prism, { highlight, languages } from 'prismjs/components/prism-core';
import { Button, TextField, FormControlLabel, Checkbox, Link, Typography } from '@mui/material';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const TextEditor = () => {

	//vaatame, kas kasutaja on sisse logitud
	var logged = false

	const username = window.localStorage.getItem("username");
	const token = window.localStorage.getItem("token");
	if (username && token) {
		logged = true
	}

	const [isPublic, setIsPublic] = useState(false)
	const [language, setLanguage] = useState("javascript")
	const [code, setCode] = useState(
		`function add(a, b) {\n  return a + b;\n}`
	);

	const [link, setLink] = useState("Link will be generated after submit!")
    const handleSubmit = async e => {
        //et leht ei refreshiks
        e.preventDefault();

        //bruh ugly
        var data = {
            content: code,
            language: language,
            public: isPublic
        }

        const resp = await fetch(
            "http://localhost:8080/post/new", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": window.localStorage.getItem("token") || ""},
                body: JSON.stringify(data)
        })
        
        const respJson = await resp.json()

        if (resp.status == 400) {
            //setError(respJson.message)
        }

        if (resp.status == 200) {
            setLink("http://localhost:3000/post/" + respJson.link)
        }
    }

	return (
		<div style={{
			position: 'relative', 
			margin: "auto",
		}}>
			<form onSubmit={handleSubmit}>
			<select
				value={language}
				style={{ float: 'right', position: 'relative' ,right: '00px' }}
				onChange={e => setLanguage(e.target.value)}
			>
				<option value="js">JavaScript</option>
				<option value="css">CSS</option>
				<option value="html">HTML</option>
				<option value="python">Python</option>
				<option value="sql">SQL</option>
				<option value="java">Java</option>
				<option value="php">PHP</option>
			</select>
			<Editor
				value={code}
				onValueChange={code => setCode(code)}
				highlight={code => highlight(code, Prism.languages[language])}
				padding={10}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 12,
					position: 'relative', 
					backgroundColor: 'white',
					margin: "auto",
					width: "90em",
					maxHeight: "675px",
					overflow: "auto"
				}}
			>
			</Editor>
			
			<div style={{position: "relative", display: "flex", gap: 20, marginTop: 15,}}>
				<Button variant='contained' style={{position: 'relative'}} type="submit">
					Submit
				</Button>
				<TextField value={link} inputProps={{readOnly: true,}} style={{backgroundColor: 'white', width: 300}}>

				</TextField>

				{logged &&	<div style={{color: "white", position: "relative", display: "flex", alignContent: "center", flexDirection: "row" }}>
            		<FormControlLabel control={<Checkbox style={{color:"white"}} onClick={() => setIsPublic(!isPublic)} />} label="Private" />
				</div>}
				{logged && <Link style={{alignItems: "center", position: "relative", display: "flex"}} href='Saved'> 
                Look at saved notes
                </Link> }
			</div>
			</form>
		</div>
	);
}

export default TextEditor