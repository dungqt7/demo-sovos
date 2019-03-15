import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SubMenu from './SubMenu';

export default class EnhancedMenu extends React.Component {
  renderMenuItems = () => {
    const { menuitems, handleItemSelected, itemsSelected } = this.props;
    return menuitems.filter(menuitem => !itemsSelected.find(itemSelected => itemSelected.type === menuitem.type))
      .map(menuitem => {
        if (menuitem.hasOwnProperty('subMenuItems')) {
          return (
            <SubMenu
              itemsSelected = { itemsSelected }
              key={ menuitem.key }
              caption={ menuitem.caption }
              menuitems={ menuitem.subMenuItems }
              handleItemSelected = { handleItemSelected }
            />
          );
        }

        return (
          <MenuItem
            key={ menuitem.key }
            onClick={ () => handleItemSelected(menuitem) }
          >
            {menuitem.caption}
          </MenuItem>
        );
      });
  };

  render() {
    const { anchorElement, open, onClose, ...others } = this.props;
    return (
      <Menu
        { ...others }
        anchorEl={ anchorElement }
        open={ open }
        onClose={ onClose }
      >
        {this.renderMenuItems()}
      </Menu>
    );
  }
}

EnhancedMenu.propTypes = {
  anchorElement: PropTypes.any,
  menuitems: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
  itemsSelected: PropTypes.array.isRequired,
};
