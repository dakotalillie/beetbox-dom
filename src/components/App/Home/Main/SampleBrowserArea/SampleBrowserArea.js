import React from 'react';
import SampleBrowserHeader from './SampleBrowserHeader/SampleBrowserHeader';
import SampleBrowser from './SampleBrowser/SampleBrowser';

const SampleBrowserArea = ({
  currentUser,
  sidebarOpen,
  rightSidebarOpen,
  downloadSamples,
  selectedSamples,
  toggleSampleSelect,
  toggleAllSamplesSelect,
  addSamples,
  deleteSamples,
  displayedSamples,
  reorderSamples,
  orderBy,
  toggleRightSidebar
}) => {
  return (
    <div className="sample_browser_area">
      <SampleBrowserHeader
        count={Object.keys(displayedSamples).length}
        downloadSamples={downloadSamples}
        selectedSamples={selectedSamples}
        toggleAllSamplesSelect={toggleAllSamplesSelect}
        deleteSamples={deleteSamples}
        displayedSamples={displayedSamples}
        toggleRightSidebar={toggleRightSidebar}
      />
      <SampleBrowser
        sidebarOpen={sidebarOpen}
        rightSidebarOpen={rightSidebarOpen}
        toggleSampleSelect={toggleSampleSelect}
        addSamples={addSamples}
        selectedSamples={selectedSamples}
        displayedSamples={displayedSamples}
        reorderSamples={reorderSamples}
        orderBy={orderBy}
      />
    </div>
  );
};

export default SampleBrowserArea;
