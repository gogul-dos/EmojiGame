import './index.css'

const WinOrLoss = props => {
  const {currentScore, playAgain, gameWon} = props
  const displayText = gameWon ? 'You Won' : 'You Lose'
  const imgUrl = gameWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgainClicked = () => {
    playAgain()
  }

  return (
    <div className="main-container-1">
      <div className="score-container">
        <h1>{displayText}</h1>
        {gameWon && <p>Best Score</p>}
        {!gameWon && <p>Score</p>}
        {!gameWon && <p className="score-color ">{currentScore}/12</p>}
        <button onClick={playAgainClicked} type="button">
          Play Again
        </button>
      </div>
      <div>
        {!gameWon && <img src={imgUrl} alt="win or lose" className="image-1" />}
      </div>
    </div>
  )
}

export default WinOrLoss
