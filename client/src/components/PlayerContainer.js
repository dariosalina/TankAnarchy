import React, { Component } from 'react'
import Player from './Player'
import {connect} from 'react-redux'

export class PlayerContainer extends Component {

    componentDidMount(){
      // this.setState()
    }


    render() {
      console.log(this.props)
      if (!this.props) return "loading..."
      return (
        <Player position={this.props.player} />
      );
    }

   
  }

  function mapStateToProps(state) {
    console.log(this.state)
    return {
        ...state.player
    }
  }


export default connect(mapStateToProps)(PlayerContainer)