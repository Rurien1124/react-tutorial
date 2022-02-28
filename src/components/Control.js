import React from 'react';

const Control = (props) => {
	return (
		<ul>
			<li><a href="/create" onClick={(e) => {
				e.preventDefault();
				props.onChangeMode(props.modes.create);
			}}>create</a></li>
			<li><a href="/update" onClick={(e) => {
				e.preventDefault();
				props.onChangeMode(props.modes.update);
			}}>update</a></li>
			<li><input type="button" onClick={(e) => {
				e.preventDefault();
				props.onChangeMode(props.modes.delete);
			}} value="delete"></input></li>
		</ul>
	)
}

export default Control;