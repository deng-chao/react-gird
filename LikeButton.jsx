import React from 'react';
import ReactDOM from 'react-dom';

import CellButton from './CellButton.jsx';

class LikeButton extends CellButton {

	constructor(){
		super();
		this.refresh = this.refresh.bind(this);
	}

	clickHandler(){
		var url = "http://localhost:8080/pretty/liked/testcase";
		$.post(url, this.props.row, this.refresh);
	}

	refresh(){
		this.props.refresh();
	}
}

export default LikeButton;