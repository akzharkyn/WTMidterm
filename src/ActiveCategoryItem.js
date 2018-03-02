import React, { Component } from 'react';
import './activecategoryitem.css';

class ActiveCategoryItem extends Component {
	render() {
	let part = this.props.part;
	
    return (
      <div className="categoryitem" onClick = {this.props.categoryClick}>
      <p>{part}</p>
      </div>
    );
  }


}
export default ActiveCategoryItem;
