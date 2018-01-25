import React from 'react';
import SampleBrowserHeader from './SampleBrowserHeader/SampleBrowserHeader';
import SampleBrowser from './SampleBrowser/SampleBrowser';

const SampleBrowserArea = ({
  currentUser,
  sidebarOpen,
  rightSidebarOpen,
  filterAreaOpen,
  downloadSamples,
  selectedSamples,
  selectSample,
  selectMultipleSamples,
  toggleAllSamplesSelect,
  addSamples,
  deleteSamples,
  displayedSamples,
  reorderSamples,
  orderBy,
  toggleRightSidebar,
  libraries,
  editSamples,
  filters
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
        selectSample={selectSample}
        selectMultipleSamples={selectMultipleSamples}
        addSamples={addSamples}
        selectedSamples={selectedSamples}
        displayedSamples={displayedSamples}
        reorderSamples={reorderSamples}
        orderBy={orderBy}
        libraries={libraries}
        filterAreaOpen={filterAreaOpen}
        editSamples={editSamples}
        filters={filters}
      />
    </div>
  );
};

export default SampleBrowserArea;
