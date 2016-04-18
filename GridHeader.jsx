import React from 'react';
import ReactDOM from 'react-dom';

import GridTh from './GridTh.jsx';

class GridHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map(
						(column, i) => 
						<GridTh 
							key = {i} 
							text = {column.props.title} 
							field = {column.props.field}
							sortable = {column.props.sortable}
							query = {this.props.query}
							criteria = {this.props.criteria}/>
					)}
				</tr>
			</thead>
		);
	}
}

export default GridHeader;