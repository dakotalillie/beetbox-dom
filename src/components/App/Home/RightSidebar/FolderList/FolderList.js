import React, { Fragment } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
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
  mapFolders = () => {
    return Object.keys(this.props.folders)
      .sort((a, b) => {
        const nameA = this.props.folders[a].name.toLowerCase();
        const nameB = this.props.folders[b].name.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      })
      .map(key => {
        const { id, name } = this.props.folders[key];
        return (
          <Fragment key={id}>
            <ContextMenuTrigger id={`context_${id}`}>
              <TreeView
                nodeLabel={
                  <div className="node_label pretty p-icon p-round p-smooth">
                    <input
                      type="checkbox"
                      onChange={() =>
                        this.props.handleCheckboxSelect('folders', id)
                      }
                      checked={this.props.selectedFolders.includes(id)}
                    />
                    <div className="state">
                      <i className="icon glyphicon glyphicon-ok" />
                      <label>{name}</label>
                    </div>
                  </div>
                }
                defaultCollapsed
              />
            </ContextMenuTrigger>
            <ContextMenu id={`context_${id}`}>
              <MenuItem
                data={{}}
                onClick={() => this.props.toggleNewItemModal('folder', id)}
              >
                <span>
                  <Glyphicon glyph="pencil" />
                  Edit
                </span>
              </MenuItem>
              <MenuItem data={{}} onClick={() => this.props.deleteFolder(id)}>
                <span>
                  <Glyphicon glyph="trash" />
                  Delete
                </span>
              </MenuItem>
            </ContextMenu>
          </Fragment>
        );
      });
  };
  render = () => {
    return <div className="folder_list">{this.mapFolders()}</div>;
  };
}

export default FolderList;
