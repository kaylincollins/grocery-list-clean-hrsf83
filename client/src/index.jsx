import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  onClick(desc, quantity) {
    var newList = this.state.list.concat({id: 4, quantity: quantity, description: desc});
    this.setState({
      list: newList
    }, () => this.refs.AddGrocery.resetDefault()) 
  }

  handleData(data) {
    this.setState({
      list: data
    })
  }

  componentDidMount() {
    axios.get('/list')
    .then((res) => this.handleData(res.data))
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


  