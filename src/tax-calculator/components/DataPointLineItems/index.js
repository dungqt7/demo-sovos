import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import green from '@material-ui/core/colors/green';
import RenderTextField from './RenderTextField';
import RenderSelectField from './RenderSelectField';
import { Field, FieldArray } from 'redux-form';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import { required } from './dataPointLineItemsValidate';
import { Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ActionDelete from '@material-ui/icons/Clear';
import SovosIconButton from 's1-ui/sovos-icon-button';

const styles = theme => ({
  card : { marginTop: '20px' },
  cardContent: { padding: '0px', borderTop: '1px solid #e6e6e6', borderBottom: '1px solid #e6e6e6' },
  cardHeader: { padding: '20px' },
  footer: { padding: '20px', display: 'flex', padding: '16px', alignItems: 'center', justifyContent: 'flex-end',borderTop:'1px solid rgb(230, 230, 230)' },
  addButton: { background:'#fff', border:0 },
  iconAdd: { color: green[500], marginTop: '0.8em' },
  field: { marginLeft: '20px' },
  lineItem: {width: '15%'},
  quantity: {width: '9%'},
  serviceCode: { width: '22%'},
  useCode: {width:'22%'},
  grossAmount: {width: '15%'},
  addDataPoints: {width: '300px', borderBottom: '1px solid rgba(0, 0, 0, 0.42)'}

});

const renderAddDataPoints = ({classes, fields, meta: { touched, error } }) => (
  <div>
    {
      fields.map((data,index) => (
        <div
          style = { {padding: '10px 20px 10px 20px'} }
          key= { index }
        >
          <p style= { {display:'inline-block', marginTop:'25px'} }> {index + 1 }.) </p>
          <Field
            className={ classNames(classes.field, classes.lineItem) }
            name={ `${data}.lineItemNumber` }
            component={ RenderTextField }
            label ="Line Item Number"
          />
          <Field
            className={ classNames(classes.field, classes.quantity) }
            name={ `${data}.quantity` }
            component={ RenderTextField }
            label ="Quantity"
          />
          <Field
            className={ classNames(classes.field, classes.serviceCode) }
            name={ `${data}.serviceCode` }
            component={ RenderTextField }
            label ="Goods/Service Code"
          />
          <Field
            className={ classNames(classes.field, classes.useCode) }
            name={ `${data}.useCode` }
            component={ RenderTextField }
            label ="Entity / Use Code"
          />
          <Field
            className={ classNames(classes.field, classes.grossAmount) }
            name={ `${data}.grossAmount` }
            component={ RenderTextField }
            label ="Gross Amount"
          />

          {
            fields && fields.length >= 2 ?
              <SovosIconButton
                style= { {marginLeft:'10px'} }
                size="medium"
                onClick={ () => fields.remove(index) }
              >
                <ActionDelete />
              </SovosIconButton>
              : null
          }

        </div>
      ))
    }
    <div
      className={ classes.footer }
      style={ { display: 'flex', justifyContent: 'flex-end', marginTop: '18px' } }
    >
      <AddIcon style= { {marginTop:'8px', color: green[500],marginRight:'10px'} } />
      <div>
        <Button
          style = { { ':hover':{ backgroundColor: 'red' },border:0, borderBottom:'1px solid #e6e6e6',borderRadius: 0,
            padding:'5px 200px 5px 0',textTransform: 'capitalize',color: 'rgba(0,0,0,0.9)', fontWeight:'400' } }
          className={ classes.addButton }
          onClick={ () => fields.push({}) }
        >
          <ArrowDropDownIcon style={ { position:'absolute', top: '5px', right: '0px' } } />
              Add Data Points
        </Button>
      </div>
    </div>

  </div>
);


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
          {/* <div>
              <p style= {{display:'inline-block', marginTop:'25px'}}> 1.) </p>
              <Field className={classNames(classes.field, classes.lineItem)} validate={[required]} name="lineItemNumber" component={RenderTextField} label ="Line Item Number" />
              <Field className={classNames(classes.field, classes.quantity)} validate={[required]}  name="quantity" component={RenderTextField} label ="Quantity" />
              <Field className={classNames(classes.field, classes.serviceCode)} validate={[required]}  name="serviceCode" component={RenderTextField} label ="Goods/Service Code" />
              <Field className={classNames(classes.field, classes.useCode)} validate={[required]}  name="useCode" component={RenderTextField} label ="Entity / Use Code" />
              <Field className={classNames(classes.field, classes.grossAmount)} validate={[required]}  name="grossAmount" component={RenderTextField} label ="Gross Amount" />



            </div> */}
          <FieldArray
            classes={ classes }
            name="renderDataPoints"
            component={ renderAddDataPoints }
          />




        </CardContent>
        {/* <div className={classes.footer}>
                <AddIcon className={classes.iconAdd} />
                <Field
                    inputProps={{
                    name: 'adDataPoints',
                    id: 'add-data',
                    }}
                    className={classes.addDataPoints}
                    name="addDataPoints"
                    component={RenderSelectField}
                    label="Add Data Points"
                >
              <MenuItem value={1}>1 - Forward calculation</MenuItem>
              <MenuItem value={2}>2 - Tax inclusive gross amount back calculation</MenuItem>
              <MenuItem value={3}>5 - Tax to gross calculation with force distribution</MenuItem>
                </Field>
            </div> */}
      </Card>
    );
  }

}

export default withStyles(styles)(DataPointLineItems);

