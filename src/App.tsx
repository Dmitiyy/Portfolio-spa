import { Fragment, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from './pages/Home';

import HomeIcon from './images/home.png';
import ProjectsIcon from './images/projects.png';
import BooksIcon from './images/books.png';
import FormIcon from './images/form.png';

import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ContactsPage from "./pages/Contacts";
import './sass/index.sass';

function App() {
  const data = [
    {default: HomeIcon, active: 'home-w.png', link: '/', id: 0},
    {default: ProjectsIcon, active: 'projects-w.png', link: '/projects', id: 1},
    {default: BooksIcon, active: 'books-w.png', link: '/experience', id: 2},
    {default: FormIcon, active: 'form-w.png', link: '/contacts', id: 3}
  ];

  return (
    <Fragment>
      <div className="container-wrap">
        <div className="panel">
          <div className=".panel__center">
            {
              data.map(item => {
                return (
                  <NavLink to={item.link} key={item.id} className={(navData) => {
                    return navData.isActive ? 'panel__center-item pannel__center-active' : 'panel__center-item'
                  }}>
                    <div>
                      <img src={item.default} alt="navigation" />
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
