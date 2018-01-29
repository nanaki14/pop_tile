import { Component } from 'react';

import AboutName from './AboutName'
import AboutSocial from './AboutSocial'

const socials = [
  {
    link: 'https://github.com/nanaki14',
    icon: 'github',
    animType: 'bottom'
  },
  {
    link: 'https://www.facebook.com/profile.php?id=100003877097329',
    icon: 'facebook',
    animType: 'top'
  },
  {
    link: 'https://twitter.com/nanaki14',
    icon: 'twitter',
    animType: 'left'
  },
]

export default class About extends Component {
  render() {
    console.log(this.props.loaded)
    return(
      <div className="c-about">
        <div className="c-about__inner">
          <AboutName loaded={this.props.loaded}/>

          {socials.map((obj, i) => {
            return(<AboutSocial key={i} link={obj.link} icon={obj.icon} animType={obj.animType} loaded={this.props.loaded}/>)
          })}
        </div>
      </div>
    )
  }
}

