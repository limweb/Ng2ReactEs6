import React from 'react';
import ReactDOM from 'react-dom';

export class ReactThongchai extends React.Component {
	render() {
		return (
			<div>My Name is:<b>{this.props.name}</b> </div>
		);
	}
}

// export class ReactThongchai{

//     static initialize(name){
//         ReactDOM.render(<Thongchai name={name} />, document.getElementById('react-thongchai'));
//     }

// }
