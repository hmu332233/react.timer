import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.scss';

function Timer(props) {
  return (
    <div className={styles.Timer}>
      <div className={styles.Timer__border}>
        <div className={styles.Timer__inner}>
          <div className={styles.Round}>
            <div className={styles.Round__timer} style={{ background: `conic-gradient(white ${props.percent}%, red 0, red 100%)`}} />
          </div>
        </div>
      </div>
    </div>
  );
}

Timer.propTypes = {
  percent: PropTypes.number,
};
Timer.defaultProps = {
  percent: 0
};

export default Timer;
