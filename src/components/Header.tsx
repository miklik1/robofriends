import { Component } from 'react';

class Header extends Component {

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
      return false;
  }
  
  render() {
    console.log('Header');
    return <h1 className='f1'>Robofriends</h1>
  }
}

export default Header;