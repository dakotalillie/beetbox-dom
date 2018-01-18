import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { ActionCable } from 'react-actioncable-provider';
import Main from '../../../containers/Main';
import Sidebar from '../../../containers/Sidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import './Home.css';

class Home extends React.Component {
  handleReceived = data => {
    this.props.receiveAddedSample(data);
  };
  render = () => {
    return (
      <div className="home">
        <Main />
        <CSSTransitionGroup
          transitionName="sidebar"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.props.sidebarOpen ? <Sidebar /> : null}
        </CSSTransitionGroup>
        <RightSidebar selectedSamples={this.props.selectedSamples} />
        <ActionCable
          channel={{
            channel: 'UsersChannel',
            userId: this.props.currentUser.id
          }}
          onReceived={this.handleReceived}
        />
      </div>
    );
  };
}

export default Home;
