import React, { useMemo } from "react";

const Menu = React.memo(({ menuContents, onChangePage }) => {
	console.log("Rendering Menu");
	
	// Return previous menuLists if 'menuContents' state was not changed
	let menuLists = useMemo(() => getMenuLists(menuContents, onChangePage), [menuContents]);
	
	return (
		<nav>
			<ul>
				{menuLists}
			</ul>
		</nav>
	);
});

const getMenuLists = (menuContents, onChangePage) => {
	let menuLists = new Array();
	
	menuContents.forEach(menuContent => {
		menuLists.push(
			<li key={menuContent.id}>
				<a
					href={"/content/" + menuContent.id}
					data-id={menuContent.id}
					onClick={
						function(e) {
							e.preventDefault();
							onChangePage(e.target.dataset.id);
						}
					}
				>
					{menuContent.title}
				</a>
			</li>);
	});
	
	return menuLists;
}

export default Menu;