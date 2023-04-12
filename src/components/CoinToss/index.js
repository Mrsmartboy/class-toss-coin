import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        ...prevState,
        head: prevState.head + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        tail: prevState.tail + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {head, tail, imageUrl} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img" />
          <button type="button" className="Button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="coin-container">
            <p className="coin">Total:{head + tail}</p>
            <p className="coin">Heads:{head}</p>
            <p className="coin">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
