import React, { Component } from 'react';
import CategoryItem from './CategoryItem';



class CategoryList extends Component {
	
	constructor(props) {
		super(props);
	}


render() {
	let names = this.props.names;
	let items = names.map((name)=>{
		return <CategoryItem lalkaKey={name.id} part={name.part} active={name.active} 
		categoryClick={this.props.onActive}/>
		
	});
	
    return (
      <div className="categorylist">
        {items}
      </div>
    );
  }
}
export default CategoryList;