import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {

    render() {
        return (
            <div>
                <p>Score: {this.props.score} vs {this.props.otherPlayerScore}</p>
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