import React from 'react';
import ReactDOM from 'react-dom';

var Abc = React.createClass({
	render: function() {
		return (
			<div className="Abc">Abc={this.props.name}</div>
		);
	}
});

export default Abc;