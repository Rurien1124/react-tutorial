import React from 'react';

const ReadContent = ({ title, desc }) => {
	console.log("Rendering ReadContent");
	
	return (
		<article>
			<h1>{title}</h1>
			{desc}
		</article>
	)
}

export default ReadContent;