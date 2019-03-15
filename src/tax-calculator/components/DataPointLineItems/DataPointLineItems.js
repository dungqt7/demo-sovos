import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import AddIcon from '@material-ui/icons/Add';
import green from '@material-ui/core/colors/green';
import { FieldArray } from 'redux-form';
// import classNames from 'classnames';
// import { Button } from '@material-ui/core';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ActionDelete from '@material-ui/icons/Clear';
// import SovosIconButton from 's1-ui/sovos-icon-button';
import AdditionalFields from './AdditionalFields';
import PropTypes from 'prop-types';

const styles = theme => {
  console.log('theme',theme);
  return ({
    card : { marginTop: '20px' },
    cardContent: { padding: '0px', borderTop: '1px solid #e6e6e6', borderBottom: '1px solid #e6e6e6' },
    cardHeader: { padding: '20px' },
    footer: { padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',borderTop:'1px solid rgb(230, 230, 230)' },
    addButton: { background:'#fff', border:0 },
    iconAdd: { color: green[500], marginTop: '0.8em' },
    field: { marginLeft: '20px' },
    lineItem: {width: '15%'},
    quantity: {width: '9%'},
    serviceCode: { width: '22%'},
    useCode: {width:'22%'},
    grossAmount: {width: '15%'},
    addDataPoints: {width: '300px', borderBottom: '1px solid rgba(0, 0, 0, 0.42)'}

  });};

// const renderAddDataPoints = ({classes, fields, meta: { touched, error } }) => (
//   <div>
//     {
//       fields.map((data,index) => (
//         <div
//           style = { {padding: '10px 20px 10px 20px'} }
//           key= { index }
//         >
//           <p style= { {display:'inline-block', marginTop:'25px'} }> {index + 1 }.) </p>
//           <Field
//             className={ classNames(classes.field, classes.lineItem) }
//             name={ `${data}.lineItemNumber` }
//             component={ RenderTextField }
//             label ="Line Item Number"
//           />
//           <Field
//             className={ classNames(classes.field, classes.quantity) }
//             name={ `${data}.quantity` }
//             component={ RenderTextField }
//             label ="Quantity"
//           />
//           <Field
//             className={ classNames(classes.field, classes.serviceCode) }
//             name={ `${data}.serviceCode` }
//             component={ RenderTextField }
//             label ="Goods/Service Code"
//           />
//           <Field
//             className={ classNames(classes.field, classes.useCode) }
//             name={ `${data}.useCode` }
//             component={ RenderTextField }
//             label ="Entity / Use Code"
//           />
//           <Field
//             className={ classNames(classes.field, classes.grossAmount) }
//             name={ `${data}.grossAmount` }
//             component={ RenderTextField }
//             label ="Gross Amount"
//           />

//           {
//             fields && fields.length >= 2 ?
//               <SovosIconButton
//                 style= { {marginLeft:'10px'} }
//                 size="medium"
//                 onClick={ () => fields.remove(index) }
//               >
//                 <ActionDelete />
//               </SovosIconButton>
//               : null
//           }

//         </div>
//       ))
//     }
//     <div
//       className={ classes.footer }
//       style={ { display: 'flex', justifyContent: 'flex-end', marginTop: '18px' } }
//     >
//       <AddIcon style= { {marginTop:'8px', color: green[500],marginRight:'10px'} } />
//       <div>
//         <Button
//           style = { { ':hover':{ backgroundColor: 'red' },border:0, borderBottom:'1px solid #e6e6e6',borderRadius: 0,
//             padding:'5px 200px 5px 0',textTransform: 'capitalize',color: 'rgba(0,0,0,0.9)', fontWeight:'400' } }
//           className={ classes.addButton }
//           onClick={ () => fields.push({}) }
//         >
//           <ArrowDropDownIcon style={ { position:'absolute', top: '5px', right: '0px' } } />
//               Add Data Points
//         </Button>
//       </div>
//     </div>

//   </div>
// );


class DataPointLineItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className = { classes.card }>
        <CardHeader
          className={ classes.cardHeader }
          title="Data Point Line Items"
          subheader="Tax Calculation will be performed on these values. Add and remove lines as needed"
        />
        <CardContent
          className={ classes.cardContent }
        >
          {/* <FieldArray
            classes={ classes }
            name="renderDataPoints"
            component={ renderAddDataPoints }
          /> */}
        </CardContent>
        <div>
          <FieldArray
            name="AddDataPoints"
            component={ AdditionalFields }
          />
        </div>

      </Card>
    );
  }

}

DataPointLineItems.propTypes = {
  classes: PropTypes.any.isRequired
};
DataPointLineItems.defaultProps = {
  classes: () => { }
};

export default withStyles(styles)(DataPointLineItems);

