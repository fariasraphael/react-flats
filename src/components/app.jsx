import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Map from './map.jsx'

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
