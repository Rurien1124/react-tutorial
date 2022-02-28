import React from "react";

const inputStyle = {
	width: "20%",
	padding: "0 0 0 0",
	margin: "0 0 0 0",
}

const CreateContent = (props) => {
	return (
		<article>
			<h1>Create</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(e.target.title.value);
					console.log(e.target.desc.value);
			}}>
				<p>
					<input type="text" name="title" placeholder="title" style={inputStyle}></input>
				</p>
				<p>
					<textarea name="desc" placeholder="desc" style={inputStyle}></textarea>
				</p>
				<p>
					<input type="submit" name="create" style={inputStyle} value="create"></input>
				</p>
			</form>
		</article>
	)
}

export default CreateContent;