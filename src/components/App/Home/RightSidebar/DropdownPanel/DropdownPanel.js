import React from 'react';
import { Glyphicon, Panel } from 'react-bootstrap';
import './DropdownPanel.css';

const DropdownPanel = ({
  children,
  title,
  collapsed,
  collapseAction,
  newItem
}) => {
  return (
    <div className="dropdown_panel">
      <Panel id={`${title}_dropdown`}>
        <Panel.Heading>
          <Panel.Title>
            {title}
            <Panel.Toggle componentClass="a">
              <Glyphicon
                glyph={collapsed ? 'triangle-right' : 'triangle-bottom'}
                onClick={collapseAction}
              />
            </Panel.Toggle>
            {newItem ? <Glyphicon glyph="plus" onClick={newItem} /> : null}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>{children}</Panel.Body>
        </Panel.Collapse>
      </Panel>
    </div>
  );
};

export default DropdownPanel;
