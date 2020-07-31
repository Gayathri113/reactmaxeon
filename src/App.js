import React,{Component} from 'react'
import Radium from 'radium'

import Banner from './assets/Banner.png'
import Toolbar from './UI/Toolbar/Toolbar'
import Description from './Description/Description'

var sectionStyle = {
  '@media (min-width : 1025px)':{
    backgroundImage : `url(${Banner})`,
    width : "100%",
    height : "940px"
  }
}

class App extends Component {
  render() {
    return (
        <div style={sectionStyle}>
          <Toolbar/>
          <Description/>
        </div>
    )
  }
}

export default Radium(App)