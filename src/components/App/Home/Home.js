import React from 'react';
import Main from '../../../containers/Main';
import Sidebar from '../../../containers/Sidebar';
import { CSSTransitionGroup } from 'react-transition-group';
import './Home.css';

class Home extends React.Component {
  componentWillMount = () => {
    document.addEventListener('keyup', e => {
      if (this.props.focusedSample) {
        const oldIndex = this.props.displayedSamples.findIndex(
          sam => sam.id === this.props.focusedSample
        );
        let newSampleId;
        if (e.key === 'ArrowDown') {
          if (oldIndex < this.props.displayedSamples.length - 1) {
            newSampleId = this.props.displayedSamples[oldIndex + 1].id;
            this.props.changeFocusedSample(newSampleId);
          }
        } else if (e.key === 'ArrowUp') {
          if (oldIndex > 0) {
            newSampleId = this.props.displayedSamples[oldIndex - 1].id;
            this.props.changeFocusedSample(newSampleId);
          }
        }
      }
    });
    document.addEventListener('dragover', e => {
      const dt = e.dataTransfer;
      if (
        dt.types &&
        (dt.types.indexOf
          ? dt.types.indexOf('Files') !== -1
          : dt.types.contains('Files'))
      ) {
        debugger;
      }
      debugger;
    });
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
      </div>
    );
  };
}

export default Home;
