// import React, { Component } from "react";
// import { useParams } from "react-router-dom";
// class ProjectDetails extends Component {
//   render() {
//     let params = useParams();
//     let { project } = this.props;
//     return (
//       <section className="ProjectDetails">
//         {/* <div className="Project-image">
//           <img src={project.imgSrc} />
//         </div> */}
//         <p>{project.title}</p>
//         <p>{params.id}</p>
//         {/* <div className="Project-details">
//           <h2>{title}</h2>
//           <div className="Tech-stack">
//             <p>Tech Stack: </p>
//             <p>{techs}</p>
//           </div>
//           <p>Project details</p>

//           <footer>
//             <a href={src} className="Project-demo-link" target="_blank">
//               <p>View live demo</p>
//             </a>
//           </footer>
//         </div> */}
//       </section>
//     );
//   }
// }
// export default ProjectDetails;
import {
  // rest of the elements/components imported remain same
  useParams,
} from "react-router-dom";
import ProjectsData from "./ProjectsData";
import "./ProjectDetails.css";

function ProjectDetails() {
  let { id } = useParams();
  let project = ProjectsData.find((p) => p.id === parseInt(id));
  return (
    <section className="ProjectDetails">
      <header>
        <h2>{project.title}</h2>
      </header>
      <div className="ProjectImage">
        <img src={project.imgSrc} />
      </div>
      <div className="ProjectInfo">
        <h3>Project Details</h3>
        <p>
          Developed with
          <ul>
            {project.techsUsed.map((t) => (
              <li>{t.toUpperCase()}</li>
            ))}
          </ul>
        </p>
        <p>{project.details}</p>
      </div>
      <footer>
        <a href={project.src} className="Project-demo-link" target="_blank">
          <p>View Github Demo</p>
        </a>
      </footer>
    </section>
  );
}

export default ProjectDetails;
