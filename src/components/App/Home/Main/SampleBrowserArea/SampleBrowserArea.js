import React from 'react';
import SampleBrowserHeader from './SampleBrowserHeader/SampleBrowserHeader';
import SampleBrowser from './SampleBrowser/SampleBrowser';

const SampleBrowserArea = ({
  currentUser,
  sidebarOpen,
  downloadSamples,
  selectedSamples,
  toggleSampleSelect,
  toggleAllSamplesSelect,
  addSamples,
  deleteSamples,
  displayedSamples,
  reorderSamples,
  orderBy,
  toggleEditSampleModal
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
        toggleEditSampleModal={toggleEditSampleModal}
      />
      <SampleBrowser
        sidebarOpen={sidebarOpen}
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
