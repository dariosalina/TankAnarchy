import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {

    render() {
        return (
            <div>
              <p style={{
                  display: 'inline-block',
                  border: 'solid',
                  color: 'white',
                  width: '200px',

                }}>Your score: {this.props.score}</p>
                <p style={{
                  display: 'inline-block',
                  border: 'solid',
                  color: 'white',
                  width: '200px',
                }}>Other score: {this.props.otherPlayerScore}</p>
            </div>
        );
      }
    }

    function mapStateToProps(state) {
        return {
          ...state
        };
      }

export default connect(mapStateToProps)(Score);