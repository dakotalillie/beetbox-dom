import React from 'react';
import { Button } from 'react-bootstrap';
import './FilterButton.css';

const FilterButton = ({ text }) => {
  return (
    <div className="filter_button">
      <Button bsSize="large">{text}</Button>
    </div>
  );
};

export default FilterButton;
