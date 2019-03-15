import React from 'react';
import PropTypes from 'prop-types';
import SovosButtonShowMenus from '../../../../util/SovosButtonShowMenus';
import { withStyles } from '@material-ui/core';

import { MY_DELIVERY_TERMS } from '../constant/AdditionalFieldConstant';

const styles = {
  
};

const AdditionalFields = ({ fields, meta: { error, submitFailed } }) => {
  const itemsData = [
    {
      type: MY_DELIVERY_TERMS,
      display: 'My Delivery Terms'
    }
  ];

  return (
    <div>
      <div>
        {submitFailed && error && <span>{error}</span>}
      </div>
      <div>
        {
          fields.map((fieldPath, index) => {
            switch (fields.get(index).type) {
              case MY_DELIVERY_TERMS: {
                return (
                  <>
                    
                  </>
                );
              }
            }
          })
        }
      </div>
      <div>
        <SovosButtonShowMenus
          className="additional-dropdown-line-item-default"
          label="Add Line Item Defaults"
          items={ itemsData }
          onItemSelected={ (item) => {
            fields.push({ type: item.type });
          } }
          itemsSelected={ fields.getAll() }
        />
      </div>
    </div>
  );
};

AdditionalFields.propTypes = {
  fields: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired
};

export default withStyles(styles)(AdditionalFields);