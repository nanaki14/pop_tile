import { Component } from 'react';
import { TimelineMax } from 'gsap';

export default class AboutSocial extends Component {

  render() {
    const { link, icon, animType, loaded } = this.props;

    if(loaded === true) {
      socialAnimLeft();
      socialAnimBottom();
      socialAnimTop();
    }

    return(
      <div className={'c-about__social _' + icon + ' _' + animType}>
        <a className="c-about__socialLink" href={ link } target="_blank"></a>
        <span className="js-aboutSocialAnim" style={{backgroundColor: '#75BEBF'}}></span>
        <span className="js-aboutSocialAnim" style={{backgroundColor: '#273F40'}}></span>
      </div>
    )
  }
}

export const socialAnimLeft = () => {
  const tl = new TimelineMax();
  const rect = '._left .js-aboutSocialAnim';
  tl.to(
    rect,
    .25,
    {
      scaleX: 1,
      ease: Power1.easeInOut,
    }
  ).to(
    rect,
    .1,
    {
      scaleX: 1,
      transformOrigin: 'right center'
    }
  ).staggerTo(
    rect,
    .25,
    {
      scaleX: 0,
      ease: Power3.easeIn
    },
    0.06
  ).to(
    '._left',
    .3,
    {
      scaleX: 1,
      transformOrigin: 'right center',
      delay: -.3
    }
  ).to(
    '.c-about__socialLink',
    .2,
    {
      opacity: 1,
      delay: -.2,
      ease: Power1.easeInOut
    }
  )
}

export const socialAnimBottom = () => {
  const tl = new TimelineMax();
  const rect = '._bottom .js-aboutSocialAnim'
  tl.to(
    rect,
    .25,
    {
      scaleY: 1,
      ease: Power1.easeInOut,
      delay: .1
    }
  ).to(
    rect,
    .1,
    {
      scaleY: 1,
      transformOrigin: 'top center'
    }
  ).staggerTo(
    rect,
    .25,
    {
      scaleY: 0,
      ease: Power3.easeIn
    },
    0.06
  ).to(
    '._bottom',
    .3,
    {
      scaleY: 1,
      transformOrigin: 'top center',
      delay: -.3
    }
  ).to(
    '.c-about__socialLink',
    .2,
    {
      opacity: 1,
      delay: -.2,
      ease: Power1.easeInOut
    }
  )
}

export const socialAnimTop = () => {
  const tl = new TimelineMax();
  const rect = '._top .js-aboutSocialAnim'
  tl.to(
    rect,
    .25,
    {
      scaleY: 1,
      ease: Power1.easeInOut,
      delay: .15
    }
  ).to(
    rect,
    .1,
    {
      scaleY: 1,
      transformOrigin: 'bottom center'
    }
  ).staggerTo(
    rect,
    .25,
    {
      scaleY: 0,
      ease: Power3.easeIn
    },
    0.06
  ).to(
    '._top',
    .3,
    {
      scaleY: 1,
      transformOrigin: 'bottom center',
      delay: -.3
    }
  ).to(
    '.c-about__socialLink',
    .2,
    {
      opacity: 1,
      delay: -.2,
      ease: Power1.easeInOut
    }
  )
}
