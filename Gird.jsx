import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './Filter.jsx';
import Pager from './Pager.jsx';
import GridHeader from './GridHeader.jsx';
import GridRow from './GridRow.jsx';


class Grid extends React.Component {

	constructor() {
		super();
		this.state = { data:[] };
		this.refrestGrid = this.refrestGrid.bind(this);
		this.query = this.query.bind(this);
		this.renderRow = this.renderRow.bind(this);
	}

	componentDidMount() {
  		var criteria = {"from" : 0, "size" : this.props.pagesize};
  		this.setState({url: this.props.dataurl});
  		this.query(this.props.dataurl, criteria);
	}

	query(url, data) {
		var grid = this;
		if(data){
			this.setState({criteria: data});	
		} else {
			data = this.state.criteria;
		}
		if(url){
			this.setState({url: url});
		} else {
			url = this.state.url;
		}
		$.get(url, data, this.refrestGrid);
	}

	refrestGrid(result) {
		var pageInfo = result.pop();
		this.setState({data: result});
		this.setState({total: pageInfo.total});
	}

	renderRow(row, i) {
		var	result = <GridRow key = {i} rowIndex = {i} row = {row} columns = {this.props.children} />
		return result;
	}

	render() {
		return (
			<table 
			className="table table-bordered table-hover gird-shadow" 
			style={{ margin:0 }}>
				<GridHeader 
					columns = {this.props.children} 
					query = {this.query} 
					criteria = {this.state.criteria} />
				<tbody>
					{this.state.data.map((row, i) => this.renderRow(row, i))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="5">
							<Filter 
								style = {{ margin: 5, float: "left" }} 
								query = {this.query} 
								criteria = {this.state.criteria} />
							<Pager 
								style = {{ margin: 0, padding: 0, float: "right" }} 
								query = {this.query} 
								criteria = {this.state.criteria}
								total = {this.state.total} />
						</td>
					</tr>
				</tfoot>
			</table>
		);
	}
}

export default Grid;