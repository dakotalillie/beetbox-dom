import React from 'react';
import { Grid, Panel, Row } from 'react-bootstrap';
import './Main.css';
import HamburgerIcon from '../../../../containers/HamburgerIcon';
import Header from './Header/Header';
import FilterArea from '../../../../containers/FilterArea';
import SampleBrowserArea from '../../../../containers/SampleBrowserArea';

const Main = ({
  sidebarOpen,
  rightSidebarOpen,
  filterAreaOpen,
  displayedCategory,
  addSamples,
  resetFilters,
  toggleFilterArea,
  filters
}) => {
  function contentClass() {
    if (
      (sidebarOpen && rightSidebarOpen) ||
      (!sidebarOpen && !rightSidebarOpen)
    ) {
      return 'content';
    } else if (sidebarOpen && !rightSidebarOpen) {
      return 'content pushed';
    } else if (!sidebarOpen && rightSidebarOpen) {
      return 'content pushed_left';
    }
  }
  return (
    <div className="main">
      <HamburgerIcon />
      <Grid className="main_grid">
        <div className={contentClass()}>
          <Row className="header_row">
            <Header
              addSamples={addSamples}
              displayedCategory={displayedCategory}
              resetFilters={resetFilters}
              toggleFilterArea={toggleFilterArea}
              filterAreaOpen={filterAreaOpen}
              filters={filters}
            />
          </Row>
          <Row className="filter_row">
            <Panel
              id="filter-area-panel"
              expanded={filterAreaOpen}
              onToggle={() => {}}
              className={
                (sidebarOpen ? 'pushed' : '') +
                (rightSidebarOpen ? 'pushed_left' : '')
              }
            >
              <Panel.Collapse>
                <Panel.Body>
                  <FilterArea />
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </Row>
          <Row className="sample_browser_row">
            <SampleBrowserArea />
          </Row>
        </div>
      </Grid>
    </div>
  );
};

export default Main;
