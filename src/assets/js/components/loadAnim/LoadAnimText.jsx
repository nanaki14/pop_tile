import { Component } from 'react';

export default class LoadAnimText extends Component {
  render() {
    return(
      <div className="loadAnim__text">
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>

        <div className="line _lineBottom"></div>
        <div className="line _lineTop"></div>
        <div className="line _lineRight"></div>
        <div className="line _lineLeft"></div>
      </div>
    )
  }
}

export const textLineAnimStart = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnim__text span',
    .3,
    {
      opacity: 1,
      ease: Power1.easeInOut,
    },
    .04
  )
}
export const textLineAnimEnd = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnim__text span',
    .3,
    {
      opacity: 0,
      ease: Power1.easeInOut,
    },
    .04
  )
}

export const textLineTopOrigin = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnim__text .line._lineTop',
    0,
    {
      transformOrigin: 'right 0'
    }
  )
}
export const textLineBottomOrigin = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnim__text .line._lineBottom',
    0,
    {
      transformOrigin: 'left 0'
    }
  )
}
export const textLineLeftOrigin = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnim__text .line._lineLeft',
    0,
    {
      transformOrigin: '0 bottom',
      delay: .2
    }
  )
}
export const textLineRightOrigin = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnim__text .line._lineRight',
    0,
    {
      transformOrigin: '0 top',
      delay: .2
    }
  )
}
