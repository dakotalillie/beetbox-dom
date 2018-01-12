import React from 'react';
import './TagsArea.css';
import TagSearchBar from './TagSearchBar/TagSearchBar';
import Tag from './Tag/Tag';

class TagsArea extends React.Component {
  state = {
    tags: this.props.tags
  };
  handleSearch = queryVal => {
    if (queryVal) {
      const tags = this.props.tags;
      const newTags = Object.keys(tags).reduce((memo, key) => {
        const tag = this.props.tags[key];
        const query = new RegExp(queryVal);
        if (tag.name.match(query)) {
          memo[key] = tag;
        }
        return memo;
      }, {});
      this.setState({ tags: newTags });
    } else {
      this.setState({ tags: this.props.tags });
    }
  };
  render = () => {
    return (
      <div className="tags_area">
        <TagSearchBar handleSearch={this.handleSearch} />
        {mapTags(this.state.tags)}
      </div>
    );
  };
}

const mapTags = tags => {
  return Object.keys(tags)
    .sort((keyA, keyB) => {
      return tags[keyB].count - tags[keyA].count;
    })
    .map(key => {
      const tag = tags[key];
      return <Tag key={key} name={tag.name} count={tag.count} />;
    });
};

export default TagsArea;
