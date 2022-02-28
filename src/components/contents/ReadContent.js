import React from 'react';

const ReadContent = ({ title, desc }) => {
	return (
		<article>
			<h1>{title}</h1>
			{desc}
		</article>
	)
}

export default ReadContent;