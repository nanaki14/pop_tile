import { Component } from 'react';

export default class LoadAnimRect extends Component {
  render() {
    return(
      <div className="loadAnimRect">
        <div className="loadAnimRect__in _01"><span className="loadAnimRect__fill"></span></div>
        <div className="loadAnimRect__in _02"><span className="loadAnimRect__fill"></span></div>
        <div className="loadAnimRect__in _03"><span className="loadAnimRect__fill"></span></div>
        <div className="loadAnimRect__in _04"><span className="loadAnimRect__fill"></span></div>
      </div>
    )
  }
}

export const rectIn01AnimStart = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnimRect__in._01',
    1,
    {
      width: '0',
      height: '0',
      ease: Power3.easeOut,
    },
    .01
  )
}
export const rectIn02AnimStart = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnimRect__in._02',
    1,
    {
      width: '40%',
      height: '40%',
      ease: Power3.easeOut,
    },
    .02
  )
}
export const rectIn03AnimStart = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnimRect__in._03',
    1,
    {
      width: '60%',
      height: '60%',
      ease: Power3.easeOut,
    },
    .03
  )
}
export const rectIn04AnimStart = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    '.loadAnimRect__in._04',
    1,
    {
      width: '80%',
      height: '80%',
      ease: Power3.easeOut,
    },
    .04
  )
}
