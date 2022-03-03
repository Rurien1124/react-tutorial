import React, { useState } from "react";
import { CONTENTS, CONTENT_MODES } from "./common/Constants";
import HelloSpring from "./react_components/HelloSpring";
import Menu from "./react_components/Menu";
import Control from "./react_components/Control";
import ReadContent from "./react_components/contents/ReadContent";
import CreateContent from "./react_components/contents/CreateContent";
import UpdateContent from "./react_components/contents/UpdateContent";
import Subject from "./react_components/Subject";
import Reduxquare from "./redux_components/Reduxquare";
import "./App.css";

const setters = {
	setMode: null,
	setContents: null,
	setSelectedContentId: null,
};

// Create content
const createContent = (contents, content) => {
	let maxContentId = Math.max.apply(Math, contents.map((content) => { return content.id })) + 1;
	let newContent = {id: maxContentId, title: content.title, desc: content.desc};
	
	setters.setContents(contents.concat(newContent));
	setters.setMode(CONTENT_MODES.READ);
	setters.setSelectedContentId(maxContentId);
}

// Update content
const updateContent = (contents, content) => {
	let updateContents = Array.from(contents);
	let updateContentIndex = getSelectedContentIndex(updateContents, content.id);
	
	if(updateContentIndex > -1) {
		updateContents[updateContentIndex] = content;
	}
	
	setters.setContents(updateContents);
	setters.setMode(CONTENT_MODES.READ);
}

// Get selected content
const getSelectedContent = (contents, selectedContentId) => {
	return contents.find(
		content => content.id === selectedContentId
	);
}

// Get selected content's index'
const getSelectedContentIndex = (contents, selectedContentId) => {
	return contents.findIndex(content => content.id === selectedContentId);
}

// Get contentType
const getContentType = (mode, contents, selectedContentId) => {
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
						createContent(contents, content, setters.setContents);
					}}
				></CreateContent>
			
			break;
		case CONTENT_MODES.UPDATE:
			contentType =
				<UpdateContent
					content={content}
					onSubmit={(content) => {
						updateContent(contents, content, setters.setContents, setters.setMode);
					}}
				></UpdateContent>
			
			break;
		case CONTENT_MODES.DELETE:
			
			break;
		default:
			alert(`Unknown mode [${mode}]`);
			break;
	}
	
	return contentType;
}


// Change Control handler
const changeControlHandler = (changeMode, contents, selectedContentId) => {
	if(changeMode === CONTENT_MODES.DELETE) {
		let deleteContents = Array.from(contents);
		let deleteContentIndex = getSelectedContentIndex(contents, selectedContentId);
		
		if(selectedContentId < 0){
			alert("선택된 항목이 없습니다.");
		} else if(window.confirm(`[${deleteContents[deleteContentIndex].title}](을)를 삭제 하시겠습니까?`)) {
			deleteContents.splice(deleteContentIndex, 1);
			
			setters.setContents(deleteContents);
			setters.setMode(CONTENT_MODES.WELCOME);
			setters.setSelectedContentId(-1);
		}
	} else if(changeMode === CONTENT_MODES.UPDATE){
		if(selectedContentId < 0) {
			alert("선택된 항목이 없습니다.");
		} else {
			setters.setMode(changeMode);
		}
	} else {
		setters.setMode(changeMode);
	}
}

const App = () => {
	console.log("Rendering App");
	
	// State variables
	const [mode, setMode] = useState("welcome");
	const [selectedContentId, setSelectedContentId] = useState(-1);
	
	// Content texts when mode is "read"
	const [contents, setContents] = useState([
		{id: 1, title: "HTML", desc: "HTML information"},
		{id: 2, title: "CSS", desc: "CSS information"},
		{id: 3, title: "JavaScript", desc: "Javascript information"},
	]);
	
	// Add setters
	setters.setMode = setMode;
	setters.setSelectedContentId = setSelectedContentId;
	setters.setContents = setContents;
	
	let contentType = getContentType(mode, contents, selectedContentId);
	
	return (
		<div className="App">
			<Subject
				title={CONTENTS.SUBJECT.TITLE}
				sub={CONTENTS.SUBJECT.SUB}
				onChangePage={ () => {
						setMode(CONTENT_MODES.WELCOME);
						setSelectedContentId(-1);
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
					(changeMode) => changeControlHandler(changeMode, contents, selectedContentId)
				}
			></Control>
			{contentType}
			<HelloSpring></HelloSpring>
			<Reduxquare></Reduxquare>
		</div>
	)
}

export default App;
