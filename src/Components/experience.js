import React, { Component } from 'react';
import './component.css';

class Experience extends Component {
  render() {  
    return (  
        <div className="container">
      <div className="background-color">
      <i className='fa fa-briefcase'></i>
      <h3 className="heading">EXPERIENCE</h3>
        {this.props.experience.map((el)=>
        <div>
          <h4>{el.jobTitle} @ {el.company}</h4>
         <p className="faded">{el.startDate} - {el.endDate}</p>
          <p>{el.jobDescription}</p>
      <br/>
        </div>
      )}
        
      </div>
</div>
        
     );
  }
}

export default Experience;