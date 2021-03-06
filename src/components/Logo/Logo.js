import './Logo.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    withName: PropTypes.bool
  };

  static defaultProps = {
    size: 'large',
    withName: true
  };

  render() {
    const { className, size, withName } = this.props;
    return (
      <div className={classNames('Logo', `Logo--${size}`, className)}>
        <svg className="Logo-icon" width="54px" height="54px" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M29,23 L29,9 L31,9 L43,9 L45,9 L45,25 L43,25 L29,25 L29,23 Z M33,21 L41,21 L41,13 L33,13 L33,21 Z M0,52 L0,0 L2,0 L52,0 L54,0 L54,54 L52,54 L0,54 L0,52 Z M4,50 L50,50 L50,4 L4,4 L4,50 Z M39,29 L43,29 L43,45 L39,45 L39,29 Z M31,29 L35,29 L35,45 L31,45 L31,29 Z M21,25 L25,25 L25,37 L21,37 L21,25 Z M15,25 L19,25 L19,45 L15,45 L15,25 Z M9,25 L13,25 L13,37 L9,37 L9,25 Z M9,17 L25,17 L25,21 L9,21 L9,17 Z M12,9 L22,9 L22,13 L12,13 L12,9 Z" />
        </svg>
        {withName && (
          <span className="Logo-name">
            Chengqi <b>Zhu</b>
          </span>
        )}
      </div>
    );
  }
}

export default Logo;
