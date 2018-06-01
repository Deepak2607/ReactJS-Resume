import React, { Component } from 'react';
import './App.css';
import About from './Components/about';
import Certificate from './Components/certificate';
import Education from './Components/education';
import Experience from './Components/experience';
import Skills from './Components/skills';


class App extends Component {
  render() {
      const person={
          avatar:'https://avatars3.githubusercontent.com/u/34836138?s=400&u=43f5037c1edc0964616fe29eaeb4aea32a76c35a&v=4',
          name:'DEEPAK KUMRAWAT',
          profession:'FrontEnd Developer',
          bio:'❤ Front end Developer -Learning new technologies, IT Undergraduate at IIIT Gwalior',
          address:'Morena link road, IIIT Gwalior',
          social:[
            {name:'facebook',url:'#'},
            {name:'github',url:'#'},
            {name:'linkedin',url:'#'} ],
          experience: [
        {
          jobTitle: "FrontEnd Intern",
          company: "Technolance",
          startDate: "May 2017",
          endDate: "July 2017",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        },
        {
          jobTitle: "Backend Intern",
          company: "BluCursor",
          startDate: "April 2018",
          endDate: "July 2018",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        }
      ],
      education: [
        {
          degree: "12th Std.",
          institution: "MVM Khargone",
          startDate: "July 2014",
          endDate: "March 2015",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        },
        {
          degree: "B.Tech",
          institution: "IIIT Gwalior",
          startDate: "July 2016",
          endDate: "Present",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        }
      ],  
      certificate: [
        {
          name: "Webkriti Winner",
          institution: "IIIT Gwalior",
          date: "March 2017",
          description: "Aenean commodo ligula eget dolor. Aenean massa."
        }
      ], 
      skills: [
        { name: "HTML5", percentage: '95%' },
        { name: "CSS", percentage: '90%' },
        { name: "Bootstrap", percentage: '85%' },
        { name: "PHP", percentage: '80%' },
        { name: "JavaScript", percentage: '75%' },
        { name: "ReactJS", percentage: '70%' }   
      ]    
                
      }
      
      
    return (
        
       
      <div className="App">

        <About
        avatar={person.avatar}
        name={person.name}
        profession={person.profession}
        bio={person.bio}
        address={person.address}
        social={person.social}
        />
        <br/>
        <Certificate
        certificate={person.certificate}
        />
        <br/>
        <Education education={person.education}
        />
        <br/>
        <Experience experience=
        {person.experience}
        />
        <br/>
        <Skills skills=
        {person.skills}
        />
        </div>
     
    );
  }
}

export default App;
