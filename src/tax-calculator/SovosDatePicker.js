import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment-timezone';
import { DatePicker } from 'material-ui-pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { primaryNavy } from 's1-ui/themes/sovos-colors';
import baseTheme from 's1-ui/themes/sovos-enterprise';

const shiftBaseTime = (momentTime, utcOffset) => {
  const offsetHours = utcOffset < 14 || utcOffset > 14 ? utcOffset / 60 : utcOffset;
  const newHours = momentTime.hours() - offsetHours;
  return momentTime.clone().hours(newHours);
};

class SovosDatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateValue: props.value
    };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.value !== prevProps.value) {
      this.setState({ dateValue: this.props.value });
    }
  }

  onInputChange = (newValue) => {
    const { onChange, timezoneName } = this.props;
    const momentValue = moment(newValue)
    // Set timezone to local
      .utcOffset(-(newValue.utcOffset()));
    // Change timezone to cultureSetting and shift the UTC time
    const shiftedMomentValue = shiftBaseTime(momentValue, moment.tz(timezoneName).utcOffset())
      .tz(timezoneName); // shift to configured TZ;

    const dateValue = shiftedMomentValue.toDate();

    this.setState({ dateValue }, () => {
      if (onChange) {
        onChange(null, dateValue);
      }
    });
  };

  render() {
    const {
      onChange, displayName, timezoneName, value, className, ...datePickerProps
    } = this.props;

    let dateValue = null;
    if (this.state.dateValue) {
      // shift TZ to browser default (altering UTC time)
      const momentDateValue = shiftBaseTime(moment(this.state.dateValue), -(new Date().getTimezoneOffset()));
      dateValue = momentDateValue.toDate();
    }

    return (
      <MuiThemeProvider
        theme={
          createMuiTheme({
            ...baseTheme,
            overrides: {
              MuiPickersDay: {
                selected: {
                  backgroundColor: primaryNavy,
                }
              }
            }
          })
        }
      >
        <DatePicker
          { ...datePickerProps }
          className={ classNames('sovosDatePicker', className) }
          value={ dateValue }
          onChange={ this.onInputChange }
        />
      </MuiThemeProvider>
    );
  }
}

SovosDatePicker.propTypes = {
  className: PropTypes.string,
  format: PropTypes.string,
  timezoneName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object,
  ...DatePicker.propTypes
};

SovosDatePicker.defaultProps = {
  className: undefined,
  format: 'YYYY-MM-DD',
  onChange: undefined,
  timezoneName: moment.tz.guess(),
  value: null
};

SovosDatePicker.displayName = 'DatePicker';

export default SovosDatePicker;
