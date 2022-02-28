import React, { useState, useEffect } from "react";
import { getAxios } from "../common/CustomAxios";

const HelloSpring = () => {
	// State variables
	const [ testStr, setTestStr ] = useState("");
	
	function callback(str) {
		setTestStr(str);
	}
	
	// 첫 번째 렌더링을 마친 후 실행
	useEffect(() => {
		getAxios("/api/hello", callback)
	});
	
	return (
		<div className="App">
			<header className="App-header">
				{testStr}
			</header>
		</div>
	);
}

export default HelloSpring;