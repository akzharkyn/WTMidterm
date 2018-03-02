import React, { Component } from 'react';
import './categoryitem.css';


class CategoryItem extends Component {
	
	render() {
	let key = this.props.id;
	let part = this.props.part;
	let active = this.props.active;
	if(active) {
	  return (
      <div className="activecategoryitem" onClick = {this.props.categoryClick(key, active)}>
      <p>{part}</p>
      </div>
    );

	}
    return (
      <div className="categoryitem" onClick = {this.props.categoryClick(key, active)}>
      <p>{part}</p>
      </div>
    );
  }


}
export default CategoryItem;