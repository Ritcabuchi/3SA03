import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
export default class WordCard extends Component {
    constructor(props){
    super(props)
    this.state = {
    active: false,
    }
    }
   
    activate = () => {
    if(!this.state.active){
    this.setState({active: true})
    }
    }
    render(){
    let className = `card ${this.state.active ? 'activeCard': ''}`
    return (
    <div className={className} onClick={this.activate}>
    {this.props.value}
    </div>
    )
}
}  
