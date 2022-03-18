import { Fragment } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <Fragment>
      <div className="experience">
        <h2>My experience</h2>
        <p>I actively work with MERN stack (mongodb, express, react, node), TypeScript, Angular 13, Rxjs, Ngrx. Also for creating markup i use gulp, inside it: pug, sass and js. I have been using JavaScript in my projects for 2 years. For state managment i use git, you can watch my github in the main page. And i have upper intermediate level in English, every day i try to improve my skills.</p>
        <Link to="/contacts">Contact with me</Link>
      </div>
    </Fragment>
  )
}
export default Experience;