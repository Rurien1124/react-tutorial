import React, { useMemo } from "react";

const getMenuLists = (contents, onChangePage) => {
	let menuLists = [];
	
	contents.forEach(content => {
		menuLists.push(
			<li key={content.id}>
				<a
					href={"/content/" + content.id}
					data-id={content.id}
					onClick={(e) => {
							e.preventDefault();
							onChangePage(e.target.dataset.id);
						}
					}
				>
					{content.title}
				</a>
			</li>);
	});
	
	return menuLists;
}

const Menu = ({ contents, onChangePage }) => {
	console.log("Rendering Menu");
	
	// Return previous menuLists if 'contents' state was not changed
	let menuLists = useMemo(() => {
			console.log("State 'contents' was changed");
			return getMenuLists(contents, onChangePage);
		},
		[contents]
	);
	
	console.log(menuLists)
	
	return (
		<nav>
			<ul>
				{menuLists}
			</ul>
		</nav>
	);
};

export default Menu;