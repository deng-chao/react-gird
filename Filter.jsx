import React from 'react';

class Filter extends React.Component {

	componentDidMount() {
		this.toggleShowLiked = this.toggleShowLiked.bind(this);
		this.keyup = this.onKeyup.bind(this);
	}

	toggleShowLiked(evt){
		var criteria = this.props.criteria;
		criteria['liked'] = evt.target.checked;
		this.props.query(null, criteria);
	}

	onKeyup(evt){
		if(evt.keyCode == 13){
			var criteria = this.props.criteria;
			criteria['filter'] = evt.target.value;
			this.props.query(null, criteria);
		}
	}

	render() {
		return (
			<div>

				<input 
				type="text" 
				className="form-control" 
				placeholder="Search for..." 
				onKeyUp = { this.keyup }
				style = {{float: "left", width: 300}}/>	

		    	<label 
		    	className="checkbox-inline" 
		    	style={this.props.style}
		    	onChange = {this.toggleShowLiked} >
		    		<input type="checkbox" /> Only Liked
				</label>	
			</div>
		);
	}
}

export default Filter;