import { Component } from  'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { loaded } from './actions/';
import App from './components/App';

import { TimelineMax } from 'gsap';

import { textLineAnimStart, textLineAnimEnd, textLineTopOrigin, textLineBottomOrigin, textLineLeftOrigin, textLineRightOrigin } from './components/loadAnim/LoadAnimText';
import { rectIn01AnimStart, rectIn02AnimStart, rectIn03AnimStart, rectIn04AnimStart } from './components/loadAnim/LoadAnimRect';


const initialState = {
  loaded: false
}

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('js-app')
);

window.addEventListener('load', () => {
  const tl = new TimelineMax();

  tl.staggerTo(
    '.loadAnim__text .line',
    .2,
    {
      scale: 1,
      ease: Power3.easeInOut,
      onStart: () => { textLineAnimStart(); },
      onComplete: () => {
        textLineTopOrigin();
        textLineBottomOrigin();
        textLineLeftOrigin();
        textLineRightOrigin();
      }
    },
    .04
  ).staggerTo(
    '.loadAnim__text .line',
    .4,
    {
      scale: 0,
      ease: Power3.easeInOut,
      delay: .4,
      onStart: () => { textLineAnimEnd(); },
    },
    .08
  ).to(
    '.loadAnimRect__fill',
    .7,
    {
      rotation: '90deg',
      ease: Power3.easeInOut,
      delay: .4
    }
  ).to(
    '.loadAnim',
    0,
    {
      display: 'none',
      onComplete: () => {
        setTimeout(() => {
        store.dispatch(loaded());
        }, 400);
      }
    }
  )

});


