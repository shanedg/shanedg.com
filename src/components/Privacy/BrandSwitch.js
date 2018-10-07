import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorSwitchBase: {
    '&$colorChecked': {
      color: '#376e8c',
      '& + $colorBar': {
        backgroundColor: '#376e8c',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  label: {
    fontFamily: '"Share Tech Mono", monospace',
  }
});

class BrandSwitch extends Component {

  render() {
    const { classes } = this.props;

    return (
        <FormControlLabel
          control={
            <Switch
              checked={this.props.checked}
              onChange={this.props.onChange}
              value={this.props.value}
              classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar,
              }}
            />
          }
          label={this.props.label}
          classes={{
            label: classes.label
          }}
        />
    );
  }
}

BrandSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandSwitch);