import React from "react";

const Subject = ({ title, sub, onChangePage }) => {
	console.log("Rendering Subject");
	
	return (
		<header>
			<h1><a
					href="/"
					onClick={
						function(e) {
							e.preventDefault();
							onChangePage();
						}
					}
				>
					{title}
				</a>
			</h1>
			{sub}
		</header>
	)
}

export default Subject;