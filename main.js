import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './Gird.jsx';

ReactDOM.render(
	<Grid dataurl = "http://localhost:8080/pretty/testcase" pagesize = "5">
		<input type='input'></input>
		<input type='input'></input>
	</Grid>, 
	document.getElementById('grid'));