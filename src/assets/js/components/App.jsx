import { Component } from 'react';

import ColorBlockContainer from '../containers/ColorBlock';
import AboutContainer from '../containers/About';
import LoadAnim from './loadAnim/LoadAnim';


export default class App extends Component {
  render() {
    return(
      <div className="l-container">
        <main className="l-main">
          <ColorBlockContainer />
          <AboutContainer/>
        </main>
        <LoadAnim/>
      </div>
    )
  }
}


