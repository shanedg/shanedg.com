import React, { Component } from 'react';

class SimpleDateRange extends Component {
  monthToString(monthIndex) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    if (monthIndex < months.length) {
      return months[monthIndex];
    } else {
      return '';
    }
  }

  render() {
    const startYear = this.props.dates.start.getFullYear();
    const startMonth = this.props.dates.start.getMonth();

    const startString = this.monthToString(startMonth) + ' ' + startYear;
    let endString = '';

    if (this.props.dates.end === 'present') {
      endString = 'present';
    } else {
      const endYear = this.props.dates.end.getFullYear();
      const endMonth = this.props.dates.end.getMonth();
      endString = this.monthToString(endMonth) + ' ' + endYear;
    }

    let end = this.props.dates.end === 'present' ? new Date() : this.props.dates.end;
    // let durationYears = Math.floor((end - this.props.dates.start)/(60*60*24*365*1000));
    // let durationUnits;
    // if (durationYears < 1) {
    // } else if (durationYears === 1) {
    //   durationUnits = 'year';
    // } else {
    //   durationUnits = 'years';
    // }

    return (
      <span className="simple-dates">
        <time dateTime={this.props.dates.start}>
          {startString}
        </time> &ndash; <time dateTime={end}>
          {endString === 'present' ? <em>{endString}</em> : endString}
        </time> {/*[ {durationYears} {durationUnits} ]*/}
      </span>
    );
  }
}

export default SimpleDateRange;