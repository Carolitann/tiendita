import { Component } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class CartWidget extends Component {
  constructor(props){
    super(props)
    this.state = {
        size:"large",
        ariaLabel:"show 17 new items in Cart",
        color:"inherit",
        badgeContent:17,
        color:"error"
    }
  }
    render() {
      return (
        <div>
            <ShoppingCartIcon size={this.state.size} ariaLabel={this.state.ariaLabel}/>
        </div>
      );
    }
}

export default CartWidget;


