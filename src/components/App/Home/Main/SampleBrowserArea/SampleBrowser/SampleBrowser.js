import React from 'react';
import { Glyphicon, Table } from 'react-bootstrap';
import './SampleBrowser.css';

const SampleBrowser = () => {
  return (
    <Table striped bordered className="sample_browser">
      <thead>
        <tr>
          <th />
          <th />
          <th>Name</th>
          <th>Type</th>
          <th>Length</th>
          <th className="favorite_column">
            <Glyphicon glyph="heart" />
          </th>
          <th>Tempo</th>
          <th>Key</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td />
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td />
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td />
          <td>Larry the Bird</td>
          <td />
          <td>@twitter</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </Table>
  );
};

export default SampleBrowser;
