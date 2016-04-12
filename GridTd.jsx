import React from 'react';
import ReactDOM from 'react-dom';

class GridTd extends React.Component {

	render() {
		console.log(this.props.data);
		return (
			<td>
				{this.props.data}
			</td>
		);
	}
}

export default GridTd;