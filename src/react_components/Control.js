import React from "react";
import { CONTENT_MODES } from "../common/Constants";

const Control = ({ onChangeMode }) => {
	console.log("Rendering Control");
	
	return (
		<ul>
			<li><a href="/create" onClick={(e) => {
				e.preventDefault();
				onChangeMode(CONTENT_MODES.CREATE);
			}}>create</a></li>
			<li><a href="/update" onClick={(e) => {
				e.preventDefault();
				onChangeMode(CONTENT_MODES.UPDATE);
			}}>update</a></li>
			<li><input type="button" onClick={(e) => {
				e.preventDefault();
				onChangeMode(CONTENT_MODES.DELETE);
			}} value="delete"></input></li>
		</ul>
	)
}

export default Control;