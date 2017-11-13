import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [  
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  onClick(desc, quantity) {
    console.log(desc, quantity);
    var newList = this.state.list.concat({id: 4, quantity: quantity, description: desc});
    this.setState({
      list: newList
    }, () => this.refs.AddGrocery.resetDefault()) 
  }

  render () {
    return ( 
    <div>
      <h3>Grocery List</h3>
      <AddGrocery  ref="AddGrocery" list={this.state.list} onClick={this.onClick.bind(this)}/>
      <GroceryList list={this.state.list}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


  