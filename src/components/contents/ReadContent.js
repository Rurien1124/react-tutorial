import React from 'react';

const ReadContent = (props) => {
	return (
		<article>
			<h1>{props.title}</h1>
			{props.desc}
		</article>
	)
}

export default ReadContent;