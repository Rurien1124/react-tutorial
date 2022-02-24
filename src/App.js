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
			subject: {
				title: "WEB", sub: "world wide web!",
			},
			menuContents: [
				{id: 1, title: "HTML", desc: "HTML information"},
				{id: 2, title: "CSS", desc: "CSS information"},
				{id: 3, title: "JavaScript", desc: "Javascript information"},
			]
		}
	}
	
	render() {
		return (
			<div className="App">
				<HelloSpring></HelloSpring>
				<Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
				<Menu menuContents={this.state.menuContents}></Menu>
				<Content title="HTML" desc="HTML is HyperTextMarkupLanguage."></Content>
			</div>
		)
	}
}

export default App;
