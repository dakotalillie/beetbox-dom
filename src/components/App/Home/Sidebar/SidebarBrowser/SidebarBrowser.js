import React from 'react';
import {
  Button,
  Glyphicon,
  Grid,
  Image,
  ListGroup,
  ListGroupItem,
  Panel,
  Row
} from 'react-bootstrap';
import TreeView from 'react-treeview';
import './SidebarBrowser.css';
import missingAlbumArt from '../../../../../assets/img/missing_albumart.jpg';

class SidebarBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      librariesCollapsed: true,
      foldersCollapsed: true,
      selectedLibraries:
        props.filters.category.type === 'libraries'
          ? props.filters.category.details
          : [],
      selectedFolders:
        props.filters.category.type === 'folders'
          ? props.filters.category.details
          : []
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.filters.category.type === 'libraries') {
      this.setState({ selectedFolders: [] });
    } else if (nextProps.filters.category.type === 'folders') {
      this.setState({ selectedLibraries: [] });
    }
  };
  handleCollapse = type => {
    switch (type) {
      case 'libraries':
        this.setState({ librariesCollapsed: !this.state.librariesCollapsed });
        break;
      case 'folders':
        this.setState({ foldersCollapsed: !this.state.foldersCollapsed });
        break;
      default:
        break;
    }
  };
  handleLibrarySelect = id => {
    if (this.state.selectedLibraries.includes(id)) {
      this.setState(
        {
          selectedLibraries: this.state.selectedLibraries.filter(
            libId => libId !== id
          )
        },
        () => {
          if (this.state.selectedLibraries.length) {
            this.props.changeCategory(
              'libraries',
              this.state.selectedLibraries
            );
          } else {
            this.props.changeCategory('all');
          }
        }
      );
    } else {
      this.setState(
        { selectedLibraries: [...this.state.selectedLibraries, id] },
        () => {
          this.props.changeCategory('libraries', this.state.selectedLibraries);
        }
      );
    }
  };
  handleFolderSelect = id => {
    if (this.state.selectedFolders.includes(id)) {
      this.setState(
        {
          selectedFolders: this.state.selectedFolders.filter(
            folderId => folderId !== id
          )
        },
        () => {
          if (this.state.selectedFolders.length) {
            this.props.changeCategory('folders', this.state.selectedFolders);
          } else {
            this.props.changeCategory('all');
          }
        }
      );
    } else {
      this.setState(
        { selectedFolders: [...this.state.selectedFolders, id] },
        () => {
          this.props.changeCategory('folders', this.state.selectedFolders);
        }
      );
    }
  };
  mapLibraries = () => {
    return Object.keys(this.props.libraries)
      .sort((a, b) => {
        const nameA = this.props.libraries[a].name.toLowerCase();
        const nameB = this.props.libraries[b].name.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      })
      .map(key => {
        const { id, name, artwork_url } = this.props.libraries[key];
        return (
          <ListGroupItem key={id}>
            <Image
              src={artwork_url ? artwork_url : missingAlbumArt}
              className="library_artwork"
            />
            <div className="pretty p-default p-curve p-thick">
              <input
                type="checkbox"
                name={`library_${id}`}
                onChange={() => this.handleLibrarySelect(id)}
                checked={this.state.selectedLibraries.includes(id)}
              />
              <div className="state">
                <i className="icon mdi mdi-check" />
                <label>{name}</label>
              </div>
            </div>
          </ListGroupItem>
        );
      });
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
          <TreeView
            key={id}
            nodeLabel={
              <div className="node_label pretty p-icon p-round p-smooth">
                <input
                  type="checkbox"
                  onChange={() => this.handleFolderSelect(id)}
                  checked={this.state.selectedFolders.includes(id)}
                />
                <div className="state">
                  <i className="icon glyphicon glyphicon-ok" />
                  <label>{name}</label>
                </div>
              </div>
            }
            defaultCollapsed
          />
        );
      });
  };
  render() {
    return (
      <div className="sidebar_browser">
        <Grid>
          <Row>
            <Glyphicon
              glyph="asterisk"
              className="main_icon"
              onClick={() => this.props.changeCategory('all')}
            />
            <Button
              className="title_button"
              onClick={() => this.props.changeCategory('all')}
            >
              All Samples
            </Button>
          </Row>
          <Row>
            <Glyphicon
              glyph="heart"
              className="main_icon"
              onClick={() => this.props.changeCategory('favorites')}
            />
            <Button
              className="title_button"
              onClick={() => this.props.changeCategory('favorites')}
            >
              Favorites
            </Button>
          </Row>
          <Row>
            <Panel id="libraries_sidebar_dropdown">
              <Panel.Heading>
                <Panel.Title>
                  <Glyphicon glyph="music" className="main_icon" />
                  <Button className="title_button">Libraries</Button>
                  <Panel.Toggle componentClass="a">
                    <Glyphicon
                      glyph={
                        this.state.librariesCollapsed
                          ? 'triangle-right'
                          : 'triangle-bottom'
                      }
                      onClick={() => this.handleCollapse('libraries')}
                    />
                  </Panel.Toggle>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <ListGroup>{this.mapLibraries()}</ListGroup>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </Row>
          <Row>
            <Panel id="libraries_sidebar_dropdown">
              <Panel.Heading>
                <Panel.Title>
                  <Glyphicon glyph="folder-close" className="main_icon" />
                  <Button className="title_button">Folders</Button>
                  <Panel.Toggle componentClass="a">
                    <Glyphicon
                      glyph={
                        this.state.foldersCollapsed
                          ? 'triangle-right'
                          : 'triangle-bottom'
                      }
                      onClick={() => this.handleCollapse('folders')}
                    />
                  </Panel.Toggle>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body id="folders_panel_body">
                  {this.mapFolders()}
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SidebarBrowser;
