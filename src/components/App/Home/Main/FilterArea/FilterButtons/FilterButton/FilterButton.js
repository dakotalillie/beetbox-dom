import React from 'react';
import { Button } from 'react-bootstrap';
import './FilterButton.css';

const FilterButton = ({ text, toggleModal, active }) => {
  return (
    <div className="filter_button">
      <Button
        id={`${text.toLowerCase()}_button`}
        bsSize="large"
        onClick={() => toggleModal(text.toLowerCase())}
        className={active ? 'active' : ''}
      >
        {text}
      </Button>
    </div>
  );
};

export default FilterButton;
