import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorSwitchBase: {
    // color: '#376e8c',
    fontFamily: '"Share Tech Mono", monospace',
    '&$colorChecked': {
      color: '#376e8c',
      '& + $colorBar': {
        backgroundColor: '#376e8c',
      },
    },
  },
  colorBar: {},
  colorChecked: {}
});

class BrandSwitch extends Component {
  // state = {
  //   checkedA: true,
  //   checkedB: true,
  // };

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };

  render() {
    const { classes } = this.props;

    return (
        <FormControlLabel
          control={
            <Switch
              // checked={this.state.checkedA}
              // onChange={this.handleChange('checkedA')}
              // value="checkedA"
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
        />
        // <FormControlLabel
        //   control={
        //     <Switch
        //       classes={{
        //         switchBase: classes.iOSSwitchBase,
        //         bar: classes.iOSBar,
        //         icon: classes.iOSIcon,
        //         iconChecked: classes.iOSIconChecked,
        //         checked: classes.iOSChecked,
        //       }}
        //       disableRipple
        //       checked={this.state.checkedB}
        //       onChange={this.handleChange('checkedB')}
        //       value="checkedB"
        //     />
        //   }
        //   label="iOS style"
        // />
    );
  }
}

BrandSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandSwitch);