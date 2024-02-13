import React, { Component } from 'react';


class Flat extends Component {
	handleClick = () => {
		if (this.props.selectFlatOnFlatList) {
		this.props.selectFlatOnFlatList(this.props.flat);
		}
	}

	render() {
		const style = {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`,
		}	

		const isSelected = this.props.flat === this.props.selectedFlat;
		const className = isSelected ? "flat card selected" : "flat card";

		return(
			<div className={className} style={style} onClick={this.handleClick}>
			  <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
			  <div className="card-description">
			    <h2>{this.props.flat.name}</h2>
			  </div>
			</div>
		);
	}
}

export default Flat;