import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import EnhancedMenu from './EnhancedMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import green from '@material-ui/core/colors/green';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const menuitems = [
  {
    key: 'more',
    caption: 'Additonal Data Types',
    subMenuItems: [
      {
        key: '5',
        type: 'ACCOUNTING_DATE',
        caption: 'Accounting Date',
        onClick: () => { }
      },
      {
        key: '6',
        type: 'DATA_OF_SERVICE_PERFORMANCE',
        caption: 'Date of Service Performance',
        onClick: () => { }
      },
      {
        key: '7',
        type: 'DATE_OF_TITLE_TRANSFER',
        caption: 'Date of Title Transfer',
        onClick: () => { }
      },
      {
        key: '8',
        type: 'DELIVERY_DATE',
        caption: 'Delivery Date',
        onClick: () => { }
      },
      {
        key: '9',
        type: 'PAYMENT_DUE_DATE',
        caption: 'Payment Due Date',
        onClick: () => { }
      },
      {
        key: '10',
        type: 'PAYMENT_RECEIVED_DATE',
        caption: 'Payment Received Date',
        onClick: () => { }
      },
      {
        key: '11',
        type: 'RECEIPT_DATE',
        caption: 'Receipt Date',
        onClick: () => { }
      }
    ]
  },
  {
    key: '1',
    type: 'CUSTOMER_VENDOR',
    caption: 'Customer/ Vendor',
    onClick: () => {}
  },
  {
    key: '2',
    type: 'DELIVERY_TERMS',
    caption: 'Delivery Terms',
    onClick: () => {}
  },
  {
    key: '3',
    type: 'DISCOUNTS_DETAILS',
    caption: 'Discounts Details',
    onClick: () => {}
  },
  {
    key: '4',
    type: 'DROP_SHIPMENT',
    caption: 'Drop Shipment',
    onClick: () => {}
  },

];

const SovosButtonAddFields = ({ itemsSelected, onItemSelected }) => {
  // if (items.length === itemsSelected.length) {
  //   return (<></>);
  // }
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
  return(
    <div style={ { display: 'flex', justifyContent: 'flex-end', marginTop: '18px' } }>
      <AddIcon style= { {marginTop:'8px', color: green[500], marginRight:'10px'} } />
      <div>
        <Button
          style = { { ':hover':{ backgroundColor: 'red' },border:0, borderBottom:'1px solid #e6e6e6',borderRadius: 0, padding:'5px 100px 5px 0',
            textTransform: 'capitalize',color: 'rgba(0,0,0,0.9)', fontWeight:'400' } }
          onClick={ handleClick }
        >

          <ArrowDropDownIcon style={ { position:'absolute', top: '5px', right: '0px' } } />
          Add Data Points
        </Button>
      </div>
      <EnhancedMenu
        itemsSelected = { itemsSelected }
        handleItemSelected = { handleItemSelected }
        open={ Boolean(anchorEl) }
        menuitems={ menuitems }
        anchorElement={ anchorEl }
        onClose={ handleClose }
      />
    </div>
  );
};

// export default class SovosButtonAddFields extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       anchorElement: null
//     };
//   }

//   handleButtonClick = event => {
//     this.setState({
//       anchorElement: event.currentTarget
//     });
//   };

//   handleMenuClose = () => {
//     this.setState({
//       anchorElement: null
//     });
//   };
//   handleItemSelected = (item) => {
//     const {onItemSelected} = this.props;
//     onItemSelected(item);
//     this.handleMenuClose();
//   }


//   render() {
//     // const { onItemSelected } = this.props
//     const { anchorElement } = this.state;
//     return (
//       <div style={ { display: 'flex', justifyContent: 'flex-end', marginTop: '18px' } }>
//         <AddIcon style= { {marginTop:'8px', color: green[500], marginRight:'10px'} } />
//         <div>
//           <Button
//             style = { { ':hover':{ backgroundColor: 'red' },border:0, borderBottom:'1px solid #e6e6e6',borderRadius: 0, padding:'5px 100px 5px 0',
//               textTransform: 'capitalize',color: 'rgba(0,0,0,0.9)', fontWeight:'400' } }
//             onClick={ this.handleButtonClick }
//           >

//             <ArrowDropDownIcon style={ { position:'absolute', top: '5px', right: '0px' } } />
//           Add Data Points
//           </Button>
//         </div>
//         <EnhancedMenu
//           handleItemSelected = { this.handleItemSelected }
//           open={ Boolean(anchorElement) }
//           menuitems={ menuitems }
//           anchorElement={ anchorElement }
//           onClose={ this.handleMenuClose }
//         />
//       </div>
//     );
//   }
// }

SovosButtonAddFields.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  itemsSelected: PropTypes.array.isRequired,

};

export default SovosButtonAddFields;
