import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  getEvenOddText = () => {
    const {count} = this.state

    return count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
  }

  render() {
    const {count} = this.state
    const countText = this.getEvenOddText()
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="title">
              Count <span className="count">{count}</span>
            </h1>
            <p className="count-status">{countText}</p>
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="description">
              Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
