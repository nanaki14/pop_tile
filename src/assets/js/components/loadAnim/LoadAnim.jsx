import { Component } from 'react';

import LoadAnimText from './LoadAnimText';
import LoadAnimRect from './LoadAnimRect';

export default class LoadAnim extends Component {
  render() {
    return(
      <div className="loadAnim">
        <LoadAnimText/>
        <LoadAnimRect/>
      </div>
    )
  }
}
