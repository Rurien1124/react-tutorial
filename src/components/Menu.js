import React, { useMemo } from "react";

const Menu = ({ contents, onChangePage }) => {
	console.log("Rendering Menu");
	
	// Return previous menuLists if 'contents' state was not changed
	let menuLists = useMemo(() => getMenuLists(contents, onChangePage), [contents]);
	
	return (
		<nav>
			<ul>
				{menuLists}
			</ul>
		</nav>
	);
};

const getMenuLists = (contents, onChangePage) => {
	let menuLists = new Array();
	
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

export default Menu;