import { Fragment, useState } from "react";
import ArrowIcon from '../images/arrow.png';
import { projectsData } from "../projectsData";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <Fragment>
      <div className="projects__loading"><img src="/images/loading.svg" alt="loading"/></div>
      <div className="projects">
        <h2>{projectsData[activeProject].name}</h2>
        <div className="projects__wrap"> 
          <img src={projectsData[activeProject].img} alt="project" />
          <ul className="projects__wrap-categories">
            {
              projectsData.map(item => {
                return (
                  <li key={item.id} 
                  className={item.id === activeProject ? 'projects__nav-active' : ''}
                  onClick={() => {setActiveProject(item.id)}}>
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="projects__btns">
          <a href={projectsData[activeProject].link} target="_blank" rel="noreferrer">Watch demo</a>
          <div onClick={() => {
            setActiveProject(prev => {
              if (prev === 3) {return 0}
              return prev + 1
            });
          }}><img src={ArrowIcon} alt="arrow" /></div>
        </div>
      </div>
    </Fragment>
  )
}
export default Projects;