import React from 'react';
import ReactDOM from 'react-dom';

class GridTd extends React.Component {

	render() {

		var style;

		if(this.props.styleFunction) {
			var style = this.props.styleFunction(this.props.data, this.props.field, this.props.rowIndex);
		}

		return (
			<td style = { style }>
				{this.props.data[this.props.field]}
			</td>
		);
	}
}

export default GridTd;