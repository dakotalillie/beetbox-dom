import React from 'react';
import Main from '../../../containers/Main';
import Sidebar from '../../../containers/Sidebar';
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
