import React, { Component } from 'react';

import Flat from './flat.jsx';

class App extends Component {
	render() {
		return(
			<div className="row">
				<FlatList />
				<Map />
			</div>
		);
	}
}

export default App;
