// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button>Subscribe</button>
    } else {
      authButton = <button>Subscribed</button>
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
