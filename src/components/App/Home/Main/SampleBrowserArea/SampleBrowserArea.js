import React from 'react';
import SampleBrowserHeader from './SampleBrowserHeader/SampleBrowserHeader';
import SampleBrowser from './SampleBrowser/SampleBrowser';

const SampleBrowserArea = ({
  currentUser,
  displayedSamples,
  sampleSearch,
  sidebarOpen,
  downloadSamples,
  toggleSampleSelect,
  selectedSamples,
  focusedSample,
  changeFocusedSample,
  toggleAllSamplesSelect,
  dropzoneVisible
}) => {
  return (
    <div className="sample_browser_area">
      <SampleBrowserHeader
        count={currentUser.samples.length}
        downloadSamples={downloadSamples}
        selectedSamples={selectedSamples}
        toggleAllSamplesSelect={toggleAllSamplesSelect}
        displayedSamples={displayedSamples}
      />
      <SampleBrowser
        sidebarOpen={sidebarOpen}
        displayedSamples={displayedSamples}
        sampleSearch={sampleSearch}
        toggleSampleSelect={toggleSampleSelect}
        focusedSample={focusedSample}
        changeFocusedSample={changeFocusedSample}
        selectedSamples={selectedSamples}
        dropzoneVisible={dropzoneVisible}
      />
    </div>
  );
};

export default SampleBrowserArea;
