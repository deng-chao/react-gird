import React from 'react';
import ReactDOM from 'react-dom';

class CellButton extends React.Component {

	constructor(){
		super();
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(){
		console.log("Default clickHandler");
	}

	render() {
		return (
			<button 
			type="button" 
			className="btn btn-default btn-sm" 
			onClick = {this.clickHandler}>
				<span className={this.props.buttonStyle} aria-hidden="true"></span>
			</button>
		);
	}
}

export default CellButton;