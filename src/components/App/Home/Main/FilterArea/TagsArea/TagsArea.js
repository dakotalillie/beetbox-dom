import React from 'react';
import './TagsArea.css';
import TagSearchBar from './TagSearchBar/TagSearchBar';
import Tag from './Tag/Tag';

class TagsArea extends React.Component {
  state = {
    tags: this.props.tags,
    selectedTags: this.props.filters.tags,
    search: ''
  };
  componentWillReceiveProps = nextProps => {
    this.setState({
      tags: nextProps.tags,
      selectedTags: nextProps.filters.tags
    });
  };
  handleClick = id => {
    if (this.state.selectedTags.includes(id)) {
      this.setState(
        {
          selectedTags: this.state.selectedTags.filter(tagId => tagId !== id)
        },
        () => this.props.changeTags(this.state.selectedTags)
      );
    } else {
      this.setState({ selectedTags: [...this.state.selectedTags, id] }, () =>
        this.props.changeTags(this.state.selectedTags)
      );
    }
  };
  mapTags = () => {
    return Object.keys(this.state.tags)
      .sort((keyA, keyB) => {
        return (
          this.props.displayedSamples.filter(sample =>
            sample.tags.includes(keyB)
          ).length -
          this.props.displayedSamples.filter(sample =>
            sample.tags.includes(keyA)
          ).length
        );
      })
      .filter(key => {
        const tag = this.state.tags[key];
        const query = new RegExp(this.state.search, 'i');
        if (tag.name.match(query)) {
          return true;
        } else {
          return false;
        }
      })
      .map(key => {
        const tag = this.state.tags[key];
        return (
          <Tag
            key={key}
            id={key}
            name={tag.name}
            count={
              this.props.displayedSamples.filter(sample =>
                sample.tags.includes(key)
              ).length
            }
            handleClick={this.handleClick}
            selected={this.state.selectedTags.includes(key)}
          />
        );
      });
  };
  handleSearch = queryVal => {
    this.setState({ search: queryVal });
  };
  render = () => {
    return (
      <div className="tags_area">
        <TagSearchBar handleSearch={this.handleSearch} />
        {this.mapTags()}
      </div>
    );
  };
}

export default TagsArea;
