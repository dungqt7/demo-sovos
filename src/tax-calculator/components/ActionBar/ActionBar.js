import React from 'react';
import PropTypes from 'prop-types';
import SovosRaisedButton from 's1-ui/sovos-raised-button';
import SovosGroupButton from 's1-ui/sovos-buttons-group';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  cardHeader: { margin: '0px 0px 20px 0px' },
  cardFooter: { margin: '20px 0px 0px 0px' },
  cardContent: { padding: '20px !important' },
  calTaxBtn: { marginLeft: 'auto !important' }
};

function ActionBar({ onReset, classes, isHeader }) {
  return (
    <Card className={ isHeader ? classes.cardHeader : classes.cardFooter }>
      <CardContent className={ classes.cardContent }>
        <SovosGroupButton className={ classes.sovosGroupButton }>
          <SovosRaisedButton
            className={ 'open-btn-actionBar' }
            color="secondary"
          >OPEN
          </SovosRaisedButton>
          <SovosRaisedButton
            className={ 'save-btn-actionBar' }
            disabled={ true }
            color="secondary"
          >
            SAVE
          </SovosRaisedButton>
          <SovosRaisedButton
            className={ 'clear-btn-actionBar' }
            disabled={ true }
            type="button"
            color="secondary"
            onClick={ onReset }
          >CLEAR
          </SovosRaisedButton>
          <SovosRaisedButton
            type="submit"
            className={ classes.calTaxBtn }
          >CALCULATE TAX
          </SovosRaisedButton>
        </SovosGroupButton>
      </CardContent>
    </Card>
  );
}

ActionBar.propTypes = {
  onReset: PropTypes.func.isRequired,
  classes: PropTypes.any.isRequired,
  isHeader: PropTypes.bool.isRequired,
};
ActionBar.defaultProps = {
  isHeader: false
};

export default withStyles(styles)(ActionBar);
