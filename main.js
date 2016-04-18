import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './Gird.jsx';

var styleFun1 = function(row, field, rowIndex){
	if(row[field] == "testcase: 3") {
		return {color: 'red'};
	}
}


ReactDOM.render(
	<Grid dataurl = "http://localhost:8080/pretty/testcase" pagesize = "5">
		<input title='Name' field='name' sortable = 'true' styleFunction = { styleFun1 }></input>
		<input title='Path' field='path'></input>
		<input title='Revision' field='revision'></input>
	</Grid>, 
	document.getElementById('grid'));