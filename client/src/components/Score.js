import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {

    render() {
        return (
            <div>
                <p>Your score is: {this.props.score}</p>
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