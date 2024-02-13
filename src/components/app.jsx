	import React, { Component } from 'react';

	import FlatList from './flat_list.jsx';
	import Map from './map.jsx'

	class App extends Component {
		constructor(props) {
			super(props);

			this.state = {
				selectedFlat: "",
				lat: -22.98423608589928,
				lng: -43.19922175132725
			}
			
			this.selectFlatApp = this.selectFlatApp.bind(this);
		}

		selectFlatApp(flat) {
		    const updatedFlat = flat;
		    this.setState({
		        selectedFlat: updatedFlat
		    }, () => console.log(this.state.selectedFlat.lat));
		}



		render() {
			return(
				<div className="row">
					<FlatList selectFlatApp={this.selectFlatApp} selectedFlat={this.state.selectedFlat}/>
					<Map selectedFlat={this.state.selectedFlat}/>
				</div>
			);
		}
	}

	export default App;
