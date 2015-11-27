import React from 'react';
import ReactDOM from 'react-dom';

export class Test extends React.Component {
	render() {
		return (
       		<div className="Test">Hello Thongchai Lim: {this.props.name}</div>
		);
	}
}
