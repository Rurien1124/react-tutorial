import React from 'react';

const Menu = (props) => {
	let menuLists = new Array();
	let menuContents = props.menuContents;
	
	menuContents.forEach(menuContent => {
		menuLists.push(
			<li key={menuContent.id}>
				<a
					href={"/content/" + menuContent.id}
					data-id={menuContent.id}
					onClick={
						function(e) {
							e.preventDefault();
							props.onChangePage(e.target.dataset.id);
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
	)
}

export default Menu;