import React from 'react';
import ReactDOM from 'react-dom';

class Pager extends React.Component {

	constructor(){
		super();
		this.to = this.to.bind(this);
		this.state = {at: 0};
	}

	to(evt){
		if(evt.target.parentNode.className == "disabled"){
			return;
		}
		var toPage = evt.target.innerText;
		if(toPage == "«") {
			toPage = 1;
		} 
		if(toPage == "»") {
			toPage = this.props.total - 1;
		}
		var criteria = this.props.criteria;
		criteria["from"] = (toPage - 1) * criteria.size;
		this.props.query(null, criteria);
		this.setState({at : toPage});
	}

	render() {

		var items = [];

		var start = this.state.at - 4 > 0 ? this.state.at - 4 : 0;

		for (var index =  start; index < this.props.total - 1; index++) {
			if(this.state.at == index + 1) {
				items.push(<li key={index} 
					className = "disabled" 
					onClick = {this.to}>
					<a style = {{ backgroundColor : "#ccc"}} href="#">{index + 1}</a>
					</li>);
			} else {
				items.push(<li key={index} onClick = {this.to}><a href="#">{index + 1}</a></li>);
			}
			if (items.length > 6) {
				break;
			}
		}

		return (
			<ul className="pagination" style={this.props.style}>
		    	<li onClick = {this.to}>
		    		<a href="#" aria-label="Previous">
		    			<span aria-hidden="true">&laquo;</span>
		      		</a>
			    </li>
			    {items}
			    <li onClick = {this.to}>
			    	<a href="#" aria-label="Next">
			    		<span aria-hidden="true">&raquo;</span>
			    	</a>
			    </li>
			</ul>
		);
	}
}

export default Pager;