import React, { useState } from "react";
import HelloSpring from "./components/HelloSpring";
import Menu from "./components/Menu";
import Control from "./components/Control";
import ReadContent from "./components/contents/ReadContent";
import CreateContent from "./components/contents/CreateContent";
import UpdateContent from "./components/contents/UpdateContent";
import DeleteContent from "./components/contents/DeleteContent";
import Subject from "./components/Subject";
import "./App.css";

// Content texts
const content = {
	welcome: {
		title: "Welcome",
		desc: "Welcome React!",
	},
	subject: {
		title: "WEB",
		sub: "world wide web!",
	}
}

const modes = {
	welcome: "welcome",
	read: "read",
	create: "create",
	delete: "delete",
	update: "update",
}

const App = () => {
	// State variables
	const [mode, setMode] = useState("welcome");
	const [selectedMenuContentId, setSelectedMenuContentId] = useState(1);

	// Content texts when mode is "read"
	const [menuContents, setMenuContents] = useState([
		{id: 1, title: "HTML", desc: "HTML information"},
		{id: 2, title: "CSS", desc: "CSS information"},
		{id: 3, title: "JavaScript", desc: "Javascript information"},
	]);
	
	const pushMenuContents = (contentTitle, contentDesc) => {
		let maxMenuContentId = Math.max.apply(Math, menuContents.map((menuContent) => { return menuContent.id })) + 1;
		let newMenuContent = {id: maxMenuContentId, title: contentTitle, desc: contentDesc};
		setMenuContents(menuContents.concat(newMenuContent));
	}
	
	let contentType, contentTitle, contentDesc = null;
	
	// Set content texts
	switch(mode) {
		case modes.welcome:
			contentTitle = content.welcome.title;
			contentDesc = content.welcome.desc;
			contentType = <ReadContent title={contentTitle} desc={contentDesc}></ReadContent>
			
			break;
		case modes.read:
			let selectedMenuContent = menuContents.find(
				menuContent => menuContent.id === selectedMenuContentId
			);
			
			contentTitle = selectedMenuContent.title;
			contentDesc = selectedMenuContent.desc;
			contentType = <ReadContent title={contentTitle} desc={contentDesc}></ReadContent>
			
			break;
		case modes.create:
			contentType = <CreateContent
				title={contentTitle}
				desc={contentDesc}
				onSubmit={(contentTitle, contentDesc) => {
					pushMenuContents(contentTitle, contentDesc);
				}}
			></CreateContent>
			
			break;
		case modes.update:
			contentType = <UpdateContent title={contentTitle} desc={contentDesc}></UpdateContent>
			
			break;
		case modes.delete:
			contentType = <DeleteContent title={contentTitle} desc={contentDesc}></DeleteContent>
			
			break;
		default:
			alert(`Unknown mode [${mode}]`);
			break;
	}
	
	return (
		<div className="App">
			<Subject
				title={content.subject.title}
				sub={content.subject.sub}
				onChangePage={ () => {
						setMode(modes.welcome)
					}
				}
			>
			</Subject>
			<Menu
				menuContents={menuContents}
				onChangePage={ (id) => {
						setMode(modes.read);
						setSelectedMenuContentId(Number(id));
					}
				}
			>
			</Menu>
			<Control
				modes={modes}
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
