import React from 'react';
import { Glyphicon, Table } from 'react-bootstrap';
import './SampleBrowser.css';

const SampleBrowser = ({ sidebarOpen, samples, sampleSearch }) => {
  return (
    <Table
      striped
      bordered
      className={'sample_browser' + (sidebarOpen ? ' pushed' : '')}
    >
      <thead>
        <tr>
          <th />
          <th />
          <th>Name</th>
          <th>Type</th>
          <th>Length</th>
          <th className="favorite_column">
            <Glyphicon glyph="heart-empty" />
          </th>
          <th>Tempo</th>
          <th>Key</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>{mapSamplesToRows(samples, sampleSearch)}</tbody>
    </Table>
  );
};

const mapSamplesToRows = (samples, sampleSearch) => {
  const searched = Object.keys(samples).reduce((memo, key) => {
    const sample = samples[key];
    const query = new RegExp(sampleSearch, 'i');
    if (sample.name.match(query)) {
      memo[key] = sample;
    }
    return memo;
  }, {});
  return Object.keys(searched).map(key => {
    const sample = searched[key];
    return (
      <tr key={key}>
        <td>
          <input type="checkbox" />
        </td>
        <td />
        <td>{sample.name}</td>
        <td>{sample.sample_type}</td>
        <td />
        <td>
          <Glyphicon glyph="heart-empty" />
        </td>
        <td>{sample.tempo ? sample.tempo : '--'}</td>
        <td>{sample.key ? sample.key : '--'}</td>
        <td />
      </tr>
    );
  });
};

export default SampleBrowser;
