import React from "react";

const Control = ({ modes, onChangeMode }) => {
	return (
		<ul>
			<li><a href="/create" onClick={(e) => {
				e.preventDefault();
				onChangeMode(modes.create);
			}}>create</a></li>
			<li><a href="/update" onClick={(e) => {
				e.preventDefault();
				onChangeMode(modes.update);
			}}>update</a></li>
			<li><input type="button" onClick={(e) => {
				e.preventDefault();
				onChangeMode(modes.delete);
			}} value="delete"></input></li>
		</ul>
	)
}

export default Control;