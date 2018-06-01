import React, { Component } from 'react';
import './component.css';

class Certificate extends Component {
  render() {  
    return (  
        <div className="container">
      <div className="background-color">
      <i className='fa fa-trophy'></i>
      <h3 className="heading">CERTIFICATES</h3>
        {this.props.certificate.map((el)=>
        <div>
        <h4>{el.name} @ {el.institution}</h4>
        <p className="faded">{el.date}</p>
          <p>{el.description}</p>
      <br/>
        </div>
        
      )}
        
      </div>
</div>
        
     );
  }
}

export default Certificate;