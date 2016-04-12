import React from 'react';
import ReactDOM from 'react-dom';

class GridTh extends React.Component {
	render() {
		console.log(this.props.text);
		return (
			<th>
				{this.props.text}
			</th>
		);
	}
}

export default GridTh;