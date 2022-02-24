import React, { Component } from 'react';

class Menu extends Component {
	render() {
		let menuLists = new Array();
		let menuContents = this.props.menuContents;
		
		menuContents.forEach(menuContent => {
			menuLists.push(
				<li key={menuContent.id}>
					<a
						href={"/content/" + menuContent.id}
						data-id={menuContent.id}
						onClick={
							function(e) {
								e.preventDefault();
								this.props.onChangePage(e.target.dataset.id);
							}.bind(this)
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
}

export default Menu;