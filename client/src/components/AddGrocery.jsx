import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	desc: '',
    	quantity: ''
    }

  this.handleDesc = this.handleDesc.bind(this);
  this.handleQuantity = this.handleQuantity.bind(this);
  }

  resetDefault() {
  	this.setState({
  		desc: '',
  		quantity: ''
  	})
  }

  handleDesc(e) {
  	this.setState({
  		desc: e.target.value
  	})
  }

  handleQuantity(e) {
		this.setState({
  		quantity: e.target.value
  	})
  }

  render () {
    return (
    	<div>
    	Description:<input value={this.state.desc} onChange={(e) => this.handleDesc(e)}></input> 
    	Quantity:<input value={this.state.quantity} onChange={(e) => this.handleQuantity(e)}></input>
    	<button onClick={(desc, quantity) => this.props.onClick(this.state.desc, this.state.quantity)}>Add Grocery</button>
    	</div>
    	)
  }
}

export default AddGrocery;

