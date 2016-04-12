import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-modal';

const customStyles = {
	content : {
		top                   : '40%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		backgroundColor       : '#fdfdfd',
		transform             : 'translate(-50%, -50%)',
		boxShadow             : '1px 1px 3px 3px #ccc'
	}
};

var  ModalButton = React.createClass({

	getInitialState: function() {
	  return { modalIsOpen: false };
	},
	
	openModal: function() {
	  this.setState({modalIsOpen: true});
	},
	
	closeModal: function() {
	  this.setState({modalIsOpen: false});
	},
	
	render: function() {

		var testcase = this.props.data;
		var attrs = [];
		var headers = [];
		var fields = [];

		for (var p in testcase.records[0]){ 
			if ( typeof(testcase[p]) != "function" ){
				headers.push(<th key={p}>{p}</th>);
				fields.push({p});
			}
		}
		headers.push(<th key="action">Action</th>);

		for (var i = testcase.records.length - 1; i >= 0; i--) {
			attrs.push(<tr key = {i}>{fields.map((attr, j) => <td key={j}>{testcase.records[i][attr["p"]]}</td>)}<td>
		    	<button 
		    	className="btn btn-warning" 
		    	onClick={this.closeModal}
		    	style = {{float: "right"}}>
		    		Ignore
		    	</button>			
			</td></tr>);
		}

		return (
		  <div>
		    <button
		    className="btn btn-default btn-sm" 
		    onClick={this.openModal}>
		    	<span className={this.props.buttonStyle} aria-hidden="true"></span>
		    </button>
		    <Modal
		    	isOpen={this.state.modalIsOpen}
		    	onRequestClose={this.closeModal}
		    	style={customStyles} >
	
		    	<h2>{testcase.path}</h2>
		    	<div style = {{ height: 300, width: 800, overflow: "auto"}}>
			    	<table className="table table-bordered table-hover">
			    		<thead>
			    			<tr>
			    				{headers}
			    			</tr>
			    		</thead>
			    		<tbody>
			    			{attrs}
			    		</tbody>
			    	</table>
		    	</div>
		    	<button 
		    	className="btn btn-success" 
		    	onClick={this.closeModal}
		    	style = {{float: "right", marginLeft: 10}}>
		    		Close
		    	</button>	
		    </Modal>
		  </div>
		);
	}
});

export default ModalButton;