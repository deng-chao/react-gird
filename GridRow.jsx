import React from 'react';
import ReactDOM from 'react-dom';

import GridTd from './GridTd.jsx';

class GridRow extends React.Component {

	render() {
		return (
			<tr>
			{
				this.props.columns.map(
					(column, i) => 
					<GridTd key = {i} 
						data = {this.props.row}
						field = {column.props.field}
						rowIndex = {i}
						styleFunction = {column.props.styleFunction}/>)
			}
			</tr>
		);
	}
}

export default GridRow;