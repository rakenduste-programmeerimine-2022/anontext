import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import Prism, { highlight, languages } from 'prismjs/components/prism-core';
import { Button, TextField, FormControlLabel, Checkbox, Link, Typography } from '@mui/material';
import {useParams} from "react-router-dom";

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
	const {postid} = useParams()
	const [language, setLanguage] = useState("javascript")
	const [code, setCode] = useState(``);

    const getCode = async () => {

		const resp = await fetch(
		  "http://localhost:8080/post/show/" + postid, {
			  method: "GET",
			  headers: { "Content-Type": "application/json", "Authorization": window.localStorage.getItem("token") || ""},
	  })
	  
		const respJson = await resp.json()
  
		if (resp.status == 400) {
			return
		}
  
		if (resp.status == 200) {
		  console.log(respJson)
		  setCode(respJson.content)
		}
	}
	getCode()
	return (
		<div style={{
			position: 'relative', 
			margin: "auto",
		}}>
			<Editor
				disabled="true"
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
		</div>
	);
}

export default TextEditor