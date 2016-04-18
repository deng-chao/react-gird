import React from 'react';
import ReactDOM from 'react-dom';

class GridTh extends React.Component {

	constructor(){
		super();
		this.sort = this.sort.bind(this);
		this.state = {arrowUp: 'arrow arrow-up', arrowDwon: 'arrow arrow-down'};
	}

	sort(evt){
		var criteria = this.props.criteria;
		if(evt.target.className.indexOf('-active') > 0){
			this.setState({arrowUp: 'arrow arrow-up', arrowDwon: 'arrow arrow-down'});
			delete criteria.orderBy;
			delete criteria.order;
		} else {
			var order;
			if (evt.target.className.indexOf('up') > 0) {
				this.setState({arrowUp: 'arrow arrow-up-active', arrowDwon: 'arrow arrow-down'});
				order = "ASC";
			} else {
				this.setState({arrowUp: 'arrow arrow-up', arrowDwon: 'arrow arrow-down-active'});
				order = "DESC";
			}
			criteria['orderBy'] = this.props.field;
			criteria['order'] = order;
		}
		this.props.query(null, criteria);
	}

	render() {
		console.log(this.props.text + ":" + this.props.sortable);
		var sorticon;
		if(this.props.sortable){
			sorticon = 
			<div style={{float:"right"}}>
				<div className={this.state.arrowUp} onClick = { this.sort }></div>
				<div className={this.state.arrowDwon} onClick = { this.sort } style = {{ marginTop: 2 }}></div>
			</div>
		} else {
			sorticon = <div style={{float:"right", height: 30}}></div>
		}
		return (
			<th>
				{this.props.text} {sorticon}
			</th>
		);
	}
}

export default GridTh;