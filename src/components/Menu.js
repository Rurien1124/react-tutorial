import React, { useMemo } from "react";

const Menu = React.memo(({ menuContents, onChangePage }) => {
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
	
	return (
		<nav>
			<ul>
				{menuLists}
			</ul>
		</nav>
	);
}, (prevProps, nextProps) => {
	return prevProps.menuContents === nextProps.menuContents;
});

export default Menu;