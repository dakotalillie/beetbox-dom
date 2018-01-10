import React from 'react';
import './TagsArea.css';
import TagSearchBar from './TagSearchBar/TagSearchBar';
import Tag from './Tag/Tag';

const TagsArea = () => {
  return (
    <div className="tags_area">
      <TagSearchBar />
      <Tag name="Acoustic" count={57} />
      <Tag name="Ambient" count={34} />
      <Tag name="Sensual" count={20} />
    </div>
  );
};

export default TagsArea;
