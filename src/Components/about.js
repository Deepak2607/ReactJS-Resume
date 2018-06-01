import React, { Component } from 'react';
import './component.css';
import Social from './social';
import Certificate from './certificate';




class About extends Component {
  render() {   
    return (
        <div className="container">
      <div className="background-color">
        <img className="img" src={this.props.avatar}/>
        <p className="name">{this.props.name}</p> 
        <p className="profession">{this.props.profession}</p>  
        <h4>{this.props.bio}</h4> 
        <h5>{this.props.address}</h5>
        <Social social={this.props.social}/>
        </div>
      </div>
    );
  }
}

export default About;
