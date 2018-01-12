import React from 'react';
import SampleBrowserHeader from './SampleBrowserHeader/SampleBrowserHeader';
import SampleBrowser from './SampleBrowser/SampleBrowser';

const SampleBrowserArea = ({
  currentUser,
  samples,
  sampleSearch,
  sidebarOpen
}) => {
  return (
    <div className="sample_browser_area">
      <SampleBrowserHeader count={currentUser.samples.length} />
      <SampleBrowser
        sidebarOpen={sidebarOpen}
        samples={samples}
        sampleSearch={sampleSearch}
      />
    </div>
  );
};

export default SampleBrowserArea;
