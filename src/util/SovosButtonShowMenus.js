import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import green from '@material-ui/core/colors/green';

export default function SovosButtonShowMenus({ label, items, itemsSelected, onItemSelected, className, /*...custom*/ }) {
  
  if (items.length === itemsSelected.length) {
    return (<></>);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleItemSelected(item) {
    onItemSelected(item);
    handleClose();
  }

  return (
    <div
      className={ className }
      style={ { display: 'flex', justifyContent: 'flex-end' } }
    >
      <AddIcon style={ { marginTop: '8px', color: green[500], marginRight: '10px' } } />

      <div>
        <Button
          style={ {
            ':hover': { backgroundColor: 'red' }, border: 0, borderBottom: '1px solid #e6e6e6', borderRadius: 0, padding: '5px 100px 5px 0',
            textTransform: 'capitalize', color: 'rgba(0,0,0,0.9)', fontWeight: '400'
          } }
          variant="outlined"
          aria-owns={ anchorEl ? 'simple-menu' : undefined }
          aria-haspopup="true"
          onClick={ handleClick }
        >
          {label}
          <ArrowDropDownIcon style={ { position: 'absolute', top: '5px', right: '0px' } } />

        </Button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
      >
        {items.filter(item => !itemsSelected.find(itemSelected => itemSelected.type === item.type))
          .map((item, key) => (
            <MenuItem
              key={ key }
              onClick={ () => handleItemSelected(item) }
            >{item.display}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}

SovosButtonShowMenus.propTypes = {
  label: PropTypes.any.isRequired,
  items: PropTypes.any.isRequired,
  itemsSelected: PropTypes.any.isRequired,
  onItemSelected: PropTypes.any.isRequired,
  className: PropTypes.string
};
