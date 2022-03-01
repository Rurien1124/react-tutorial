import React, { useState, useMemo } from 'react';
import { INPUT_STYLE } from "../../common/Constants";

const UpdateContent = ({ content, onSubmit }) => {
	console.log("Rendering UpdateContent");
	
	let [contentTitle, setContentTitle] = useState(content.title);
	let [contentDesc, setContentDesc] = useState(content.desc);
	
	return (
		<article>
			<h1>Update</h1>
			{JSON.stringify(content)}
			<form action="/update_process"
				method="post"
				onSubmit={(e) => {
						e.preventDefault();
						let contentData = {
							id: content.id,
							title: contentTitle,
							desc: contentDesc,
						}
						onSubmit(contentData);
					}
				}
			>
				<input type="hidden" name="id" value={content.id}></input>
				<p>
					<input
						type="text"
						name="title"
						placeholder="title"
						value={contentTitle}
						style={INPUT_STYLE}
						onChange={(e) => {
								setContentTitle(e.target.value);
							}
						}
					></input>
				</p>
				<p>
					<textarea
						name="desc"
						placeholder="desc"
						value={contentDesc}
						style={INPUT_STYLE}
						onChange={(e) => {
								setContentDesc(e.target.value);
							}
						}
					></textarea>
				</p>
				<p>
					<input type="submit" name="update" style={INPUT_STYLE} value="update"></input>
				</p>
			</form>
		</article>
	)
}

export default UpdateContent;