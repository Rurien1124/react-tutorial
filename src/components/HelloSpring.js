import React, { useState, useEffect } from "react";
import { getAxios } from "../common/CustomAxios";

const HelloSpring = () => {
	console.log("Rendering HelloSpring");
		
	// State variables
	const [ testStr, setTestStr ] = useState("");
		
	// 렌더링을 마친 후 한 번만 실행
	useEffect(() => {
		getAxios("/api/hello", setTestStr)
		
	}, []);
	
	return (
		<div className="App">
			<header className="App-header">
				{testStr}
			</header>
		</div>
	);
}

export default HelloSpring;