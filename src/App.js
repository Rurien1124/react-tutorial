import React, { Component } from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import Subject from './components/Subject';
import HelloSpring from './components/HelloSpring';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			mode: "welcome",
			welcome: {
				title: "Welcome",
				desc: "Welcome React!",
			},
			subject: {
				title: "WEB",
				sub: "world wide web!",
			},
			selectedMenuContentId: 1,
			menuContents: [
				{id: 1, title: "HTML", desc: "HTML information"},
				{id: 2, title: "CSS", desc: "CSS information"},
				{id: 3, title: "JavaScript", desc: "Javascript information"},
			]
		}
	}
	
	render() {
		let _title, _desc = null;
		
		if(this.state.mode === "welcome") {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if(this.state.mode === "read") {
			let selectedMenuContent = this.state.menuContents.find(
				menuContent => menuContent.id === this.state.selectedMenuContentId
			);
			console.log(selectedMenuContent)
			
			_title = selectedMenuContent.title;
			_desc = selectedMenuContent.desc;
		} else {
			alert(`Unknown mode [${this.state.mode}]`);
		}
		
		return (
			<div className="App">
				<HelloSpring></HelloSpring>
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
					onChangePage={
						function() {
							this.setState({mode: "welcome"});
						}.bind(this)
					}
				>
				</Subject>
				<Menu
					menuContents={this.state.menuContents}
					onChangePage={
						function(id) {
							this.setState({mode: "read", selectedMenuContentId: Number(id)});
						}.bind(this)
					}
				>
				</Menu>
				<Content title={_title} desc={_desc}></Content>
			</div>
		)
	}
}

export default App;
