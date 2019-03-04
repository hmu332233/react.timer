import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.scss';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.Timer}>
      </div>
    );
  }
}

Timer.propTypes = {
};
Timer.defaultProps = {
};

export default Timer;