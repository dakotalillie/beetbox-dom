import React from 'react';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import './FolderList.css';

class FolderList extends React.Component {
  state = {};
  onToggle = (node, toggled) => {
    if (this.state.cursor) {
      this.setState(prevState => {
        return {
          cursor: {
            ...prevState,
            cursor: { ...prevState.cursor, active: false }
          }
        };
      });
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState({ cursor: node });
  };
  render = () => {
    return (
      <div className="folder_list">
        <TreeView
          nodeLabel={
            <div className="node_label">
              <input type="checkbox" />
              <label>Folder Name</label>
            </div>
          }
          defaultCollapsed
        >
          <TreeView
            nodeLabel={
              <div className="node_label">
                <input type="checkbox" />
                <label>Folder Name</label>
              </div>
            }
            defaultCollapsed
          />
          <TreeView
            nodeLabel={
              <div className="node_label">
                <input type="checkbox" />
                <label>Folder Name</label>
              </div>
            }
            defaultCollapsed
          />
        </TreeView>
        <TreeView
          nodeLabel={
            <div className="node_label">
              <input type="checkbox" />
              <label>Folder Name</label>
            </div>
          }
          defaultCollapsed
        />
        <TreeView
          nodeLabel={
            <div className="node_label">
              <input type="checkbox" />
              <label>Folder Name</label>
            </div>
          }
          defaultCollapsed
        />
      </div>
    );
  };
}

export default FolderList;
