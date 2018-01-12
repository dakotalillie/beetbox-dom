import React from 'react';
import { Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value }, () =>
      this.props.setSampleSearch(this.state.value)
    );
  };

  handleClick = e => {
    this.setState({ value: '' }, () =>
      this.props.setSampleSearch(this.state.value)
    );
  };

  render = () => {
    return (
      <div className="search_bar">
        <FormGroup bsSize="large">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search"
            onChange={this.handleChange}
            className="main_search_input"
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

export default SearchBar;
