import React from 'react';
import { Button } from 'react-bootstrap';
import './Tag.css';

const Tag = ({ id, name, count, selected, handleClick }) => {
  return (
    <div className="tag">
      <Button
        bsSize="small"
        className={'tag_button' + (selected ? ' selected' : '')}
        onClick={() => handleClick(id)}
      >
        <div className="tag_name">{name}</div>
        <div className="tag_count">{count}</div>
      </Button>
    </div>
  );
};

export default Tag;
