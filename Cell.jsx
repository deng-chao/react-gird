import React from 'react';
import ReactDOM from 'react-dom';

import CellButton from './CellButton.jsx';

class Cell extends React.Component {

	constructor(){
		super();
	}

	render() {

		var component;

		if(this.props.button){
			component = this.props.button;
		} else if (this.props.buttonStyle) {
			component = <CellButton buttonStyle = {this.props.buttonStyle} />;
		} else if (this.props.label) {
			component = this.props.label;
		}

		return (
			<td className={ this.props.cellStyle }>
				{component}
			</td>
		);
	}
}

export default Cell;