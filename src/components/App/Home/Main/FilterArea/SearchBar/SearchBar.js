import React from 'react';
import { Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    value: this.props.search
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ value: nextProps.search });
  };

  handleChange = e => {
    this.props.setSampleSearch(e.target.value);
  };

  handleClick = e => {
    this.props.setSampleSearch('');
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
