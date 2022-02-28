import React, { useState, useEffect } from 'react';
import { getAxios } from '../common/CustomAxios';

const HelloSpring = () => {
	// 요청받은 정보를 담아줄 변수 선언
	const [ testStr, setTestStr ] = useState('');
	
	// 변수 초기화
	function callback(str) {
		setTestStr(str);
	}
	
	// 첫 번째 렌더링을 마친 후 실행
	useEffect(() => {
		getAxios('/api/hello', callback)
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