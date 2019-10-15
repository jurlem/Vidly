import React, {Component} from 'react';

class Test extends Component {
  state = {
    count: 0,
  };

  render () {
    return (
      <span className={this.getBadgeClasses ()}>{this.formatCount ()}</span>
    );
  }

  getBadgeClass () {
    let badgeClass = 'badge m-2 badge-';
    badgeClass += this.state.count === 0 ? 'warning' : 'primary';
    return badgeClass;
  }
}

export default Test;
