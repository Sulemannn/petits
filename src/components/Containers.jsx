import React from 'react'
import Circle from './Circle'

class Containers extends React.Component {

    render () {

        return (

            <div>
                {/* container Player 1 (P1) */}

                 <div className="containerP1">
                    <div className="divchildP1">
                      <div >
                        <Circle circleColor={this.state.player1Tokens[0] ? "#4646e8" : "black"} />
                        <Circle circleColor={this.state.player1Tokens[1] ? "#4646e8" : "black"} />
                      </div>

                      <div >
                        <Circle circleColor={this.state.player1Tokens[2] ? "#4646e8" : "black"} />
                        <Circle circleColor={this.state.player1Tokens[3] ? "#4646e8" : "black"} />
                      </div>
                    </div>
                  </div>

                  {/* container Player 2 (P2) */}

                  <div className="containerP2">
                    <div className="divchildP2">
                      <div >
                        <Circle circleColor={this.state.player2Tokens[0] ? "#c30c0c" : "black"} />
                        <Circle circleColor={this.state.player2Tokens[1] ? "#c30c0c" : "black"} />
                      </div>

                      <div >
                        <Circle circleColor={this.state.player2Tokens[2] ? "#c30c0c" : "black"} />
                        <Circle circleColor={this.state.player2Tokens[3] ? "#c30c0c" : "black"} />
                      </div>
                    </div>
                  </div>
            </div>

        )
    }
}

export default Containers;