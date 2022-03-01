import React, { useState } from "react";
import { CONTENTS, CONTENT_MODES } from "./common/Constants";
import HelloSpring from "./components/HelloSpring";
import Menu from "./components/Menu";
import Control from "./components/Control";
import ReadContent from "./components/contents/ReadContent";
import CreateContent from "./components/contents/CreateContent";
import UpdateContent from "./components/contents/UpdateContent";
import DeleteContent from "./components/contents/DeleteContent";
import Subject from "./components/Subject";
import "./App.css";

// Create content
const createContent = (contents, content, setContents) => {
	let maxContentId = Math.max.apply(Math, contents.map((content) => { return content.id })) + 1;
	let newContent = {id: maxContentId, title: content.title, desc: content.desc};
	setContents(contents.concat(newContent));
}

// Update content
const updateContent = (contents, content, setContents, setMode) => {
	let updateContents = Array.from(contents);
	let updateContentIndex = updateContents.findIndex(updateContent => updateContent.id === content.id);
	
	if(updateContentIndex > -1) {
		updateContents[updateContentIndex] = content;
	}
	
	setContents(updateContents);
	setMode(CONTENT_MODES.READ);
}

// Get selected content
const getSelectedContent = (contents, selectedContentId) => {
	return contents.find(
		content => content.id === selectedContentId
	);
}

// Get contentType
const getContentType = (mode, contents, setContents, setMode, selectedContentId) => {
	let content = getSelectedContent(contents, selectedContentId);
	let contentType, contentTitle, contentDesc = null;
	
	// Set content texts
	switch(mode) {
		case CONTENT_MODES.WELCOME:
			contentType = <ReadContent title={CONTENTS.WELCOME.TITLE} desc={CONTENTS.WELCOME.DESC}></ReadContent>
			
			break;
		case CONTENT_MODES.READ:
			contentType = <ReadContent title={content.title} desc={content.desc}></ReadContent>
			
			break;
		case CONTENT_MODES.CREATE:
			contentType =
				<CreateContent
					title={contentTitle}
					desc={contentDesc}
					onSubmit={(content) => {
						createContent(contents, content, setContents);
					}}
				></CreateContent>
			
			break;
		case CONTENT_MODES.UPDATE:
			contentType =
				<UpdateContent
					content={content}
					onSubmit={(content) => {
						updateContent(contents, content, setContents, setMode);
					}}
				></UpdateContent>
			
			break;
		case CONTENT_MODES.DELETE:
			contentType = <DeleteContent></DeleteContent>
			
			break;
		default:
			alert(`Unknown mode [${mode}]`);
			break;
	}
	
	return contentType;
}

const App = () => {
	console.log("Rendering App");
	
	// State variables
	const [mode, setMode] = useState("welcome");
	const [selectedContentId, setSelectedContentId] = useState(1);
	
	// Content texts when mode is "read"
	const [contents, setContents] = useState([
		{id: 1, title: "HTML", desc: "HTML information"},
		{id: 2, title: "CSS", desc: "CSS information"},
		{id: 3, title: "JavaScript", desc: "Javascript information"},
	]);
	
	let contentType = getContentType(mode, contents, setContents, setMode, selectedContentId);
	
	return (
		<div className="App">
			<Subject
				title={CONTENTS.SUBJECT.TITLE}
				sub={CONTENTS.SUBJECT.SUB}
				onChangePage={ () => {
						setMode(CONTENT_MODES.WELCOME)
					}
				}
			></Subject>
			<Menu
				contents={contents}
				onChangePage={ (id) => {
						setMode(CONTENT_MODES.READ);
						setSelectedContentId(Number(id));
					}
				}
			></Menu>
			<Control
				onChangeMode={
					(changeMode) => {
						setMode(changeMode);
					}
				}
			></Control>
			{contentType}
			<HelloSpring></HelloSpring>
		</div>
	)
}

export default App;
