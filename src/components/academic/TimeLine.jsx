"use client";
import "./TimeLine.css";
import React, { useState } from "react";
import { GraduationCap as SchoolIcon, Star as StarIcon } from "lucide-react";
import { WorkOutline as WorkIcon } from "@mui/icons-material";
import AcedemicLayout from "./AcademicLayout";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { timelineElements } from "@/app/data";

function TimeLine() {
  return (
    <div>
      <AcedemicLayout>
        <h1 className="font-bold text-6xl xs:text-5xl sm:text-6xl lg:text-6xl text-accent text-center">Career Journey</h1>
      </AcedemicLayout>
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <TimelineElement key={element.key} element={element} />
        ))}
        <VerticalTimelineElement
          className="staricon"
          icon={<StarIcon />}
          iconStyle={{ background: '#ffc107', color: '#fff' }}
        />
      </VerticalTimeline>
    </div>
  );
}

const TimelineElement = ({ element }) => {
  const [showProjects, setShowProjects] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  let isWorkIcon = element.icon === "work";

  return (
    <VerticalTimelineElement
      date={element.date}
      dateClassName={'vertical-timeline-element-date'}
      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
      visible={inView}
      contentStyle={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.7s ease-in-out",
      }}
      iconStyle={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.7s ease-in-out",
      }}
    >
      <div className="title-container" ref={ref}>
        {element.logo && <img src={element.logo} alt={`${element.title} logo`} className="logo" />}
        <div>
          <h3 className="vertical-timeline-element-title">
            {element.title}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {element.location}
          </h5>
          {element.icon === "school" && (
            <p className="vertical-timeline-element-grade">
              {element.percentage && `Percentage: ${element.percentage}%`}
              {element.cgpa && `CGPA: ${element.cgpa}`}
            </p>
          )}
        </div>
      </div>
      <p id="description">{element.description}</p>
      <div>
        {element.buttonText && element.buttonUrl && (
          <a
            className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
            href={element.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {element.buttonText}
          </a>
        )}
      </div>
      <div>
        {element.more && (
          <>
            <button
              className="button moreButton"
              onClick={toggleProjects}
            >
              {showProjects ? "Show Less" : "More..."}
            </button>
            {showProjects && <hr className="more-divider" />}
          </>
        )}
      </div>

      {showProjects && (
        <div className="projects">
          {element.clients.map((client, clientIndex) => (
            <div key={clientIndex} className="client-projects">
              <div className="client-header">
                <img src={client.clientLogo} alt={`${client.clientName} logo`} className="client-logo" />
                <h4 className="client-name">Client Name: {client.clientName}</h4>
              </div>
              {client.projects.slice().reverse().map((project, projectIndex) => (
                <div key={projectIndex} className="project">
                  <h5 className="project-title">Project {client.projects.length - projectIndex}: {project.title}</h5>
                  <p className="project-duration">{project.duration}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              ))}
              {clientIndex < element.clients.length - 1 && <hr className="client-divider" />}
            </div>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default TimeLine;
