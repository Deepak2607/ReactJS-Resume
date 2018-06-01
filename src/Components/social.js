import React, { Component } from 'react';
import './component.css';

class Social extends Component {
  render() {  
    return (
        
      <div className="App">
        <div className='left'>
        <ul>
        {this.props.social.map((el)=>
        <li key={el.name}>
        <a href={el.url} target="_blank" rel="noopener noreferrer">
        <span className="icon-color">
        <i className={"fa fa-" + el.name + "-square"}/>
        </span>
        </a>
        </li>
      )}
        </ul>

      </div>
      </div>
        
     );
  }
}

export default Social;
