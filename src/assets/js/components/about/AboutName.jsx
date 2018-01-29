import { Component } from 'react';
import { TimelineMax } from 'gsap';

export default class AboutName extends Component {
  render() {
    const { loaded } = this.props;
    this.props.loaded ? aboutNameAnim() : null;

    return(
      <div className="c-about__name">
        <span className="js-aboutNameAnim" style={{color: '#75BEBF'}}>n</span>
        <span className="js-aboutNameAnim">a</span>
        <span className="js-aboutNameAnim" style={{color: '#75BEBF'}}>n</span>
        <span className="js-aboutNameAnim">a</span>
        <span className="js-aboutNameAnim" style={{color: '#4E7E7F'}}>k</span>
        <span className="js-aboutNameAnim">i</span>
      </div>
    )
  }
}

export const aboutNameAnim = () => {
  const tl = new TimelineMax();
  const elm = '.js-aboutNameAnim';

  tl.staggerTo(
    elm,
    .2,
    {
      y: '0%',
      ease: Power2.easeOut,
      delay: .5
    },
    .07
  )
}
