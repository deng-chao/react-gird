import React from 'react';
import ReactDOM from 'react-dom';

class GridTh extends React.Component {
	render() {
		console.log(this.props.text + ":" + this.props.sortable);
		var sorticon;
		if(this.props.sortable){
			sorticon = 
			<div style={{float:"right"}}>
				<div className="arrow-up"></div>
				<div className="arrow-down" style = {{ marginTop: 2 }}></div>
			</div>
		}
		return (
			<th>
				{this.props.text} {sorticon}
			</th>
		);
	}
}

export default GridTh;