import React, { Component } from 'react';
import './component.css';


class Skills extends Component {
    
   
    
  render() {
   
    return (  
        
        <div className="container">
        <div className="background-color">
      <i className='fa fa-briefcase'></i>
      <h3 className="heading">Skills</h3>
        {this.props.skills.map((el)=>
      <div>
            <h4>{el.name}</h4>
      <div>
      <div className='progress-bar progress-bar-striped progress-bar-animated'>
         <span className="bar"></span>
            </div>
          </div>
      
        </div>
      )}
        
      </div>
</div>
        
     );
  }
}

export default Skills;