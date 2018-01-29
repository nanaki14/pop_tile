import { Component } from 'react';
import { TimelineMax } from 'gsap';

import ColorBlockItem from './ColorBlockItem';

const colors = ['75BEBF', '4E7E7F', '9CFDFF', '273F40', '8CE3E5', '75BEBF', '4E7E7F', '9CFDFF', '8CE3E5', '75BEBF'];

export default class ColorBlock extends Component {
  render() {
    this.props.loaded ? colorBoxAnim() : null;
    
    return(
      <div className="c-colorBlock">

        {colors.map((color, i) => {
          return (<ColorBlockItem key={i} color={'#' + color} />)
        })}

        <span className="js-colorBoxAnim" style={{backgroundColor: '#75BEBF'}}></span>
        <span className="js-colorBoxAnim" style={{backgroundColor: '#273F40'}}></span>
        <span className="js-colorBoxAnim" style={{backgroundColor: '#9CFDFF'}}></span>

      </div>
    )
  }
}

export const colorBoxAnim = () => {
  const tl = new TimelineMax();
  const rect = '.js-colorBoxAnim';

  tl.to(
    rect,
    .35,
    {
      scaleY: 1,
      ease: Power1.easeInOut
    }
  ).to(
    rect,
    0,
    {
      transformOrigin: 'center bottom',
      ease: Power1.easeInOut
    }
  ).staggerTo(
    rect,
    .4,
    {
      scaleY: 0,
      transformOrigin: 'center bottom',
      ease: Power3.easeIn
    },
    .15
  ).to(
    '.c-colorBlock__item',
    0,
    {
      display: 'block',
      delay: -.2
    }
  )
}
