import React, { Component } from 'react'
import Flat from "./flat.jsx"
import flats from "../../data/flats"

class FlatList extends Component {

	render(){
		return(
			<div className="flat-list col-sm-7">
				{flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
			</div>
		);
	}
}

export default FlatList;