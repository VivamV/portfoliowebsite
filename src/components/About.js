import React from "react";
import "../styles/About.css";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function About() {

  return (
    <div className="aboutcontainer">
    <div className="varabout">
    <h1>About Me</h1>
      <p>I am a Undergraduate Student.
      I am pursuing BTech Computer Science from Jaypee Institute of Information Technology,Noida.<br></br>
      I am a passionate web Developer and have made various projects.
       I have knowledge about Technolgies like ReactJs,firebase,JavaScript,Css,html etc</p>
    </div>
    <div className="experience " >
      <VerticalTimeline lineColor="linear-gradient(45deg, #0a0a0a, #3a4452)">
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{   background: "linear-gradient(45deg, #0a0a0a, #3a4452)"
           , color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title vtitle">
          Jaypee Institute of Information Technology,Noida
          </h3>
          <h4 className="vertical-timeline-element-subtitle vsubtitle">
            BTech
          </h4>
          <p> Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
  );
}

export default About;