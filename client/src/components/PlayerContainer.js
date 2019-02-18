import React, { Component } from 'react'
import Player from './Player'
import {connect} from 'react-redux'
import {Position, movement } from '../api/index'

const data = 2

export class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    movement(data)
    Position(props=>{
      console.log(props)
    })
  }
    componentDidMount(){
      
    }



    // movement(){
    //   const data = 2
    //   socket.on('movement', data )
    // }

    render() {
      if (!this.props) return "loading..."
      return (
        <Player position={this.props} />
      );
    }

   
  }

  function mapStateToProps(state) {
    console.log(state.player)
    return {
        ...state.player
    }
  }


export default connect(mapStateToProps)(PlayerContainer)