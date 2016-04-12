import React from 'react';
import ReactDOM from 'react-dom';

import GridTh from './GridTh.jsx';

class GridHeader extends React.Component {

	componentDidMount() {
		console.log(this.props.rowIndex);
		console.log(this.props.row);
		console.log(this.props.columns);
	}

	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map((column, i) => <GridTh key = {i} text = {column.title}/>)}
				</tr>
			</thead>
		);
	}
}

export default GridHeader;