import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" className="button" onClick={this.onClickButton}>
            Subscribed
          </button>
        ) : (
          <button type="button" className="button" onClick={this.onClickButton}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
