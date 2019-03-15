import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import EnhancedMenu from './EnhancedMenu';

const styles = {
  subMenuItem: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class SubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      anchorElement: null
    };
  }

  handleItemClick = event => {
    if (!this.anchorElement) {
      this.setState({
        anchorElement: event.currentTarget
      });
    }

    this.setState({
      menuOpen: !this.menuOpen
    });
  };

  handleSubMenuClose = () => {
    this.setState({
      menuOpen: false
    });
  };

  render() {
    const { caption, menuitems, classes, handleItemSelected, itemsSelected } = this.props;
    const { anchorElement, menuOpen } = this.state;
    return (
      <div>
        <MenuItem
          onMouseOver={ this.handleItemClick }
          className={ classNames(classes.subMenuItem) }
        >
          {caption}
          <ArrowRightIcon />
        </MenuItem>
        <EnhancedMenu
          itemsSelected = { itemsSelected }
          anchorOrigin={ {
            vertical: 'top',
            horizontal: 'left'
          } }
          transformOrigin={ {
            vertical: 'top',
            horizontal: 'right'
          } }
          open={ menuOpen }
          menuitems={ menuitems }
          anchorElement={ anchorElement }
          onClose={ this.handleSubMenuClose }
          handleItemSelected = { handleItemSelected }

        />
      </div>
    );
  }
}

SubMenu.propTypes = {
  caption: PropTypes.string.isRequired,
  classes: PropTypes.any,
  menuitems: PropTypes.array.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
  itemsSelected: PropTypes.array.isRequired,

};


export default withStyles(styles)(SubMenu);
