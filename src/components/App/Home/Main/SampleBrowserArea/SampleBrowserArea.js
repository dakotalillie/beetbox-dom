import React from 'react';
import SampleBrowserHeader from './SampleBrowserHeader/SampleBrowserHeader';
import SampleBrowser from '../../../../../containers/SampleBrowser';

const SampleBrowserArea = () => {
  return (
    <div className="sample_browser_area">
      <SampleBrowserHeader />
      <SampleBrowser />
    </div>
  );
};

export default SampleBrowserArea;
