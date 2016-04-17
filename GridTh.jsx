import React from 'react';
import ReactDOM from 'react-dom';

class GridTh extends React.Component {
	render() {
		return (
			<th>
				{this.props.text} 
				<div style={{float:"right"}}>
					<div className="arrow-up"></div>
					<div className="arrow-down" style = {{ marginTop: 2 }}></div>
				</div>
				
				
			</th>
		);
	}
}

export default GridTh;