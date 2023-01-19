import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import Prism, { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

const TextEditor = () => {

	const [language, setLanguage] = useState("javascript")
	const [code, setCode] = useState(
		`function add(a, b) {\n  return a + b;\n}`
	);

	return (
		<div>
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
				}}
			>
			</Editor>
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
		</div>
	);
}

export default TextEditor