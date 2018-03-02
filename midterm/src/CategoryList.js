import React, { Component } from 'react';
import CategoryItem from './CategoryItem';



class CategoryList extends Component {
	
	constructor(props) {
		super(props);
		this.makeActive = this.makeActive.bind(this);
	}

	makeActive(key,active) {
		this.props.onActive(key,active);
	}



render() {
	let names = this.props.names;
	let items = names.map((name)=>{
		return <CategoryItem key = {name.id} id={name.id} part = {name.part} active={name.active} categoryClick={(key,active)=>this.makeActive(key,active)}/>
		
	});
	
    return (
      <div className="categorylist">
        {items}
      </div>
    );
  }
}
export default CategoryList;