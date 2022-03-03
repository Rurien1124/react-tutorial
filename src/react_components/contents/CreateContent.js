import React from "react";
import { INPUT_STYLE } from "../../common/Constants";

const CreateContent = ({ onSubmit }) => {
	console.log("Rendering CreateContent");
	
	return (
		<article>
			<h1>Create</h1>
			<form
				action="create_process"
				method="post"
				onSubmit={(e) => {
						e.preventDefault();
						let contentData = {
							title: e.target.title.value,
							desc: e.target.desc.value,
						}
						onSubmit(contentData);
					}
				}
			>
				<p>
					<input type="text" name="title" placeholder="title" style={INPUT_STYLE}></input>
				</p>
				<p>
					<textarea name="desc" placeholder="desc" style={INPUT_STYLE}></textarea>
				</p>
				<p>
					<input type="submit" name="create" style={INPUT_STYLE} value="create"></input>
				</p>
			</form>
		</article>
	)
}

export default CreateContent;