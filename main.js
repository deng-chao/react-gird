import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './Gird.jsx';

ReactDOM.render(
	<Grid dataurl = "http://localhost:8080/pretty/testcase" pagesize = "5">
		<input type='input' title='Name' field='name'></input>
		<input type='input' title='Path' field='path'></input>
		<input type='input' title='Revision' field='revision'></input>
	</Grid>, 
	document.getElementById('grid'));