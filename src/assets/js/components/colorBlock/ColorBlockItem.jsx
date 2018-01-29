import { Component } from 'react';

export default class ColorBlockItem extends Component {
  render() {
    return(
      <div className="c-colorBlock__item" style={{ backgroundColor: this.props.color }}>
        <div className="c-colorBlock__itemInner"></div>
      </div>
    )
  }
}
