import React, { Component } from 'react';
import './component.css';

class Education extends Component {
  render() {  
    return (  
        <div className="container">
      <div className="background-color">
      <i className='fa fa-graduation-cap'></i>
      <h3 className="heading">EDUCATION</h3>
        {this.props.education.map((el)=>
        <div>
          <h4>{el.degree} @ {el.institution}</h4> <p className="faded">{el.startDate} - {el.endDate}</p>
          <p>{el.description}</p>
      <br/>
        </div>
      )}
        
      </div>
</div>
        
     );
  }
}

export default Education;