import React, { Fragment } from 'react';
import { Glyphicon, Col, Grid } from 'react-bootstrap';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './TagList.css';

const TagList = ({
  tags,
  selectedTags,
  deleteTag,
  toggleNewItemModal,
  handleCheckboxSelect
}) => {
  function mapTags() {
    return Object.keys(tags)
      .sort((a, b) => {
        const nameA = tags[a].name.toLowerCase();
        const nameB = tags[b].name.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      })
      .map(key => {
        const { id, name, count } = tags[key];
        return (
          <Fragment key={id}>
            <ContextMenuTrigger id={`context_${id}`}>
              <Col xs={6}>
                <div className="node_label pretty p-default p-curve p-thick p-smooth">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxSelect('tags', id)}
                    checked={selectedTags.includes(id)}
                  />
                  <div className="state">
                    <label>
                      {name}
                      <span className="tag_count">{count}</span>
                    </label>
                  </div>
                </div>
              </Col>
            </ContextMenuTrigger>
            <ContextMenu id={`context_${id}`}>
              <MenuItem data={{}} onClick={() => toggleNewItemModal('tag', id)}>
                <span>
                  <Glyphicon glyph="pencil" />
                  Edit
                </span>
              </MenuItem>
              <MenuItem data={{}} onClick={() => deleteTag(id)}>
                <span>
                  <Glyphicon glyph="trash" />
                  Delete
                </span>
              </MenuItem>
            </ContextMenu>
          </Fragment>
        );
      });
  }
  return (
    <div className="tag_list">
      <Grid>{mapTags()}</Grid>
    </div>
  );
};

export default TagList;
