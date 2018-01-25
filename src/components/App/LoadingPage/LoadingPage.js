import React from 'react';
import { ScaleLoader } from 'react-spinners';
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className="loading_page">
      <div className="center_div">
        <ScaleLoader
          color={'#c52545'}
          loading={true}
          height={70}
          width={4}
          radius={4}
          margin={'4px'}
        />
        <h3>Loading</h3>
      </div>
    </div>
  );
};

export default LoadingPage;
