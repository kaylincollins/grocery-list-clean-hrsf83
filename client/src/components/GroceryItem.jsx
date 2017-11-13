import React from 'react';

const GroceryItem = (props) => (
  <div> Item: {props.item.description} Quantity: {props.item.quantity} 
  </div>
)

export default GroceryItem;