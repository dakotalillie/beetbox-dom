import React from 'react';
import Main from '../../../containers/Main.js';
import Sidebar from './Sidebar/Sidebar';
import { CSSTransitionGroup } from 'react-transition-group';
import './Home.css';

const Home = ({ sidebarOpen }) => {
  return (
    <div className="home">
      <Main />
      <CSSTransitionGroup
        transitionName="sidebar"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {sidebarOpen ? <Sidebar /> : null}
      </CSSTransitionGroup>
    </div>
  );
};

export default Home;
