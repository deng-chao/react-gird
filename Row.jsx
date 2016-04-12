import React from 'react';
import ReactDOM from 'react-dom';

import Cell from './Cell.jsx';
import LikeButton from './LikeButton.jsx';
import ModalButton from './ModalButton.jsx';

class Row extends React.Component {

	render() {

		var lastCell;
		if (this.props.data.isChanged) {
			lastCell = <Cell 
				cellStyle = "danger" 
				button = { <ModalButton buttonStyle = "glyphicon glyphicon-list-alt" data = {this.props.data}  /> }
			/>;
		} else {
			lastCell = <Cell 
				cellStyle = "success" 
				label = "No Changes" 
			/>;
		}

		var firstCell;
		if (this.props.data.liked) {
			firstCell = <Cell button = { <LikeButton buttonStyle = "glyphicon glyphicon-heart" row = {this.props.data} refresh = {this.props.refresh} /> } />;
		} else {
			firstCell = <Cell button = { <LikeButton buttonStyle = "glyphicon glyphicon-heart-empty" row = {this.props.data} refresh = {this.props.refresh} />} />;
		}

		return (
			<tr>
				{firstCell}
				<Cell label = {this.props.data.path} />
				<Cell label = {this.props.data.name} />
				<Cell label = {this.props.data.revision} />
				{lastCell}
			</tr>
		);
	}
}

export default Row;