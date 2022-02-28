import React from 'react';

const inputStyle = {
	width: "20%",
	padding: "0 0 0 0",
	margin: "0 0 0 0",
}

const CreateContent = (props) => {
	return (
		<article>
			<h1>Create</h1>
			<form action="/create-content" method="POST">
				<p>
					<input type="text" name="title" placeholder="title" style={inputStyle}></input>
				</p>
				<p>
					<textarea name="desc" placeholder="desc" style={inputStyle}></textarea>
				</p>
				<p>
					<input type="button" name="create" style={inputStyle} value="create"
						onClick={(e) => {
							e.preventDefault();
							
						}}></input>
				</p>
			</form>
		</article>
	)
}

export default CreateContent;