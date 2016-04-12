import React from 'react';
import ReactDOM from 'react-dom';

import GridTd from './GridTd.jsx';

class GridRow extends React.Component {

	render() {
		console.log(this.props.row);
		return (
			<tbody>
				<tr>
					{this.props.columns.map((column, i) => <GridTd key = {i} data = {this.props.row.row[column.props.field]}/>)}
				</tr>
			</tbody>			
		);
	}
}

export default GridRow;