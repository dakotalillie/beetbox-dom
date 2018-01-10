import React from 'react';
import { Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import './TagSearchBar.css';

class TagSearchBar extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    this.setState({ value: '' });
  };
  render = () => {
    return (
      <div className="tag_search_bar">
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search Tags"
            onChange={this.handleChange}
            className="tag_search_input"
          />
          {this.state.value ? (
            <Button className="clear_search_button" onClick={this.handleClick}>
              <Glyphicon glyph="remove" />
            </Button>
          ) : null}
        </FormGroup>
      </div>
    );
  };
}

export default TagSearchBar;
