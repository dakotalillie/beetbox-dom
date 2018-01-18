import React from 'react';
import { Button } from 'react-bootstrap';
import './CircleOfFifths.css';

class CircleOfFifths extends React.Component {
  state = {
    mode: 'major'
  };
  render = () => {
    return (
      <div className="circle_of_fifths_container">
        <Button
          bsSize="large"
          bsStyle={this.state.mode === 'major' ? 'primary' : null}
          onClick={() =>
            this.setState({
              mode: 'major'
            })
          }
        >
          Major
        </Button>
        <Button
          bsSize="large"
          bsStyle={this.state.mode === 'minor' ? 'primary' : null}
          onClick={() =>
            this.setState({
              mode: 'minor'
            })
          }
          className="minor_button"
        >
          Minor
        </Button>
        <ul className="circle-of-fifths">
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'C' : 'a'}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'G' : 'e'}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'D' : 'b'}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'A' : 'f'}
              {this.state.mode === 'major' ? null : (
                <span className="accidental">&#x0266F;</span>
              )}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'E' : 'c'}
              {this.state.mode === 'major' ? null : (
                <span className="accidental">&#x0266F;</span>
              )}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'B' : 'g'}
              {this.state.mode === 'major' ? null : (
                <span className="accidental">&#x0266F;</span>
              )}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'G' : 'e'}
              {this.state.mode === 'major' ? (
                <span className="accidental">&#x266d;</span>
              ) : (
                <span className="accidental">&#x0266d;</span>
              )}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'D' : 'b'}
              <span className="accidental">&#x266d;</span>
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'A' : 'f'}
              {this.state.mode === 'major' ? (
                <span className="accidental">&#x266d;</span>
              ) : null}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'E' : 'c'}
              {this.state.mode === 'major' ? (
                <span className="accidental">&#x266d;</span>
              ) : null}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'B' : 'g'}
              {this.state.mode === 'major' ? (
                <span className="accidental">&#x266d;</span>
              ) : null}
            </div>
          </li>
          <li className="key">
            <div className="major">
              {this.state.mode === 'major' ? 'F' : 'd'}
            </div>
          </li>
        </ul>
      </div>
    );
  };
}

export default CircleOfFifths;
