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

    return (
      <span className="simple-dates">
        <time dateTime={this.props.dates.start}>
          {startString}
        </time> &ndash; <time dateTime={end}>
          {endString === 'present' ? <em>{endString}</em> : endString}
        </time>
      </span>
    );
  }
}

export default SimpleDateRange;